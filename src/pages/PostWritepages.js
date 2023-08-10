import React,  { useState,}  from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function PostWritepage() {
    const navigate = useNavigate();
    const Question = new FormData();
    const [posttitle, setPosttitle] = useState("");
    const [category, setCategory] = useState('정부24');
    const [contents, setContents] = useState("");
    const [image, setImage] = useState(null);
    const [recording, setRecording] = useState(false);
    let mediaRecorder;
    const [audioChunks, setAudioChunks] = useState([]);
    const [audioFile, setAudioFile] = useState(null);
    const selectList = ['정부24', '키오스크', '이커머스'];

    const handletitle = e => {
        const newTitle = e.target.value
        setPosttitle(newTitle)
    }
    const handlecategory = e => {
        setCategory(e.target.value)        
    }
    const hadlecontents = e => {
        setContents(e.target.value)
    }
    const handleimage = e => {
        setImage(e.target.files[0]);
    }
    const startRecording = (e) => {
      e.preventDefault();
      const constraints = { audio: true };
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              setAudioChunks((prevChunks) => [...prevChunks, event.data]);
            }
          };
          mediaRecorder.start();
          setRecording(true);
        })
        .catch((error) => {
          console.error('녹음 시작 실패', error);
        });
    };
    const stopRecording = (e) => {
      if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
        setRecording(false);

        const blob = new Blob(audioChunks, { type: 'audio/wav' });
        const recordedAudio = new File([blob], 'recorded_audio.wav');
        setAudioFile(recordedAudio);
        postWrite();
      }
    };
    const postWrite = e => {
        e.preventDefault();
        Question.append('title', posttitle);
        Question.append('category', category);
        Question.append('contents', contents);
        Question.append('image', image);
        Question.append('audio', audioFile);
        console.log(Question.get('title'))
        console.log(Question.get('category'))
        console.log(Question.get('contents'))
        console.log(Question.get('image'))
        console.log(Question.get('audio'))
        axios({
            method:'post',
            url: '/questions',
            data:Question,
        })
        .then(result => {console.log('요청성')
        console.log(result)
    })
        .catch(error => {console.log('요청실패')
        console.log(error)
    })

    };
    return(
        <div className="postwrite">
            <div className="postbox" >
                <form>
                    <div className="postbox-title">
                        <input required type="text" placeholder="제목" maxLength={20} name='posttitle' onChange={handletitle}/>
                    </div>
                    <div className="postbox-category">
                        <select onChange={handlecategory} value={category}>
                            {selectList.map((item) => (
                                <option value={item} key={item}>
                                    {item}
                                </option>
                            ))}
                        </select>    
                    </div>
                    <div className="postbox-wirtebox">
                        <textarea rows={30} cols={80} onChange={hadlecontents}></textarea>
                        <input type="file" accept="image/*" onChange={handleimage}/>
                        <h2>음성 녹음</h2>
                          {recording ? (
                            <button onClick={stopRecording}>녹음 중지</button>
                          ) : (
                            <button onClick={startRecording}>녹음 시작</button>
                          )}
                        <input type="submit" value={'게시글 등록'} onClick={postWrite}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
