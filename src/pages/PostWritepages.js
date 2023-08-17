import React, { useState, } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../css/postWritepage.css'
import { BsMicFill } from 'react-icons/bs'

export default function PostWritepage() {
  const navigate = useNavigate();
  const Question = new FormData();
  const [posttitle, setPosttitle] = useState("");
  const [category, setCategory] = useState('정부24');
  const [contents, setContents] = useState("");
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const selectList = ['정부24', '키오스크', '이커머스'];

  //녹음파일 관련
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [disabled, setDisabled] = useState(true); // 😀😀😀

  const token = window.localStorage.getItem('token')

  const onRecAudio = (e) => {
    e.preventDefault();
    setDisabled(true) // 😀😀😀

    // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }
    // 마이크 사용 권한 획득
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        // 3분(180초) 지나면 자동으로 음성 저장 및 녹음 중지
        if (e.playbackTime > 180) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          // 메서드가 호출 된 노드 연결 해제
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });
  };

  // 사용자가 음성 녹음을 중지 했을 때
  const offRecAudio = (e) => {
    e.preventDefault();
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    media.ondataavailable = function (e) {
      setAudioUrl(e.data);
      setOnRec(true);
    };

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    // 미디어 캡처 중지
    media.stop();

    // 메서드가 호출 된 노드 연결 해제
    analyser.disconnect();
    source.disconnect();

    if (audioUrl) {
      URL.createObjectURL(audioUrl); // 출력된 링크에서 녹음된 오디오 확인 가능
    }

    // File 생성자를 사용해 파일로 변환
    const sound = new File([audioUrl], "soundBlob", {
      lastModified: new Date().getTime(),
      type: "audio/mpeg",
      accept: 'audio/*'
    });
    setAudio(sound);
    console.log(sound)

    // 😀😀😀
    setDisabled(false);
    /// // File 정보 출력
  };

  const play = (e) => {
    e.preventDefault();
    const audio = new Audio(URL.createObjectURL(audioUrl)); // 😀😀😀
    audio.loop = false;
    audio.volume = 1;
    audio.play();
  };

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
    console.log(e)
    setImage(e.target.files[0]);
  }
  // const startRecording = (e) => {
  //   e.preventDefault();
  //   const constraints = { audio: true };
  //   navigator.mediaDevices.getUserMedia(constraints)
  //     .then((stream) => {
  //       mediaRecorder = new MediaRecorder(stream);
  //       mediaRecorder.ondataavailable = (event) => {
  //         if (event.data.size > 0) {
  //           setAudioChunks((prevChunks) => [...prevChunks, event.data]);
  //         }
  //       };
  //       mediaRecorder.start();
  //       setRecording(true);
  //     })
  //     .catch((error) => {
  //       console.error('녹음 시작 실패', error);
  //     });
  // };
  // const stopRecording = (e) => {
  //   if (mediaRecorder && mediaRecorder.state === 'recording') {
  //     mediaRecorder.stop();
  //     setRecording(false);

  //     const blob = new Blob(audioChunks, { type: 'audio/wav' });
  //     const recordedAudio = new File([blob], 'recorded_audio.wav');
  //     setAudioFile(recordedAudio);
  //     postWrite();
  //   }
  // };
  const postWrite = e => {
    e.preventDefault();
    Question.append('files', image)
    Question.append('files', audio)
    console.log(audio)
    Question.append("dto", new Blob([JSON.stringify({
      'title': posttitle,
      'category': category,
      'contents': contents
    })], { type: "application/json" }));
    axios({
      method: 'post',
      url: '//localhost:8080/questions',
      headers: {
        "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
        "Authorization": `Bearer ${token}`,
      },
      data: Question,
    })
      .then((response) => {
        alert('/등록되었습니다.')
        navigate('/post')
      })
      .catch(error => {
        console.log('요청실패')
        console.log(error)
        navigate('/post')
      })

  };
  return (
    <div className="postwrite">
      <div className="posttitle">게시글 작성</div>
      <div className="postbox" >
        <form className="postWriteform">
          
          <div className="infobox postbox-title">
            <label htmlFor="inputtitle">제목</label>
            <input required className="postinfo" id="inputtitle" type="text" placeholder="제목을 입력해주세요." maxLength={20} name='posttitle' onChange={handletitle} />
          </div>
          <div className="infobox postbox-category">
            <label htmlFor="categoryselect">카테고리</label>
            <select id='categoryselect' className=" postinfo" onChange={handlecategory} value={category}>
              {selectList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="postbox-wirtebox">
            <label htmlFor="contents">내용</label>
            <textarea rows={30} cols={80} onChange={hadlecontents}></textarea>
            <div className="ee">이미지 첨부</div>
            <input className="postbtn" type="file" accept="image/*" onChange={handleimage} />
            <div className="ee">음성 첨부</div>
            <button className="postbtn" onClick={onRec ? onRecAudio : offRecAudio}><BsMicFill /> 녹음</button>
            <button className="postbtn" onClick={play} disabled={disabled}>재생</button>
            <input className="postwritebtn" type="submit" value={'게시글 등록'} onClick={postWrite} />
          </div>
        </form>
      </div>
    </div>
  )
}