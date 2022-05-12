
import './App.css';
import './S1.css';
import { useState } from 'react';

var cnt = 0;

function App() {

const [call,setcall] = useState(" ");

const numwin = (n) => {
  var win = cnt + n +" ";
  setcall(win);
}

  const [s1, sets1] = useState("");
  const [s2, sets2] = useState("");
  const [s3, sets3] = useState("");
  const [s4, sets4] = useState("");
  const [s5, sets5] = useState("");
  const [s6, sets6] = useState("");
  const [s7, sets7] = useState("");
  const [s8, sets8] = useState("");
  const [s9, sets9] = useState("");

  const [f1, setf1] = useState(false);

  function b1() {
    if (s1 == 0) {
      if (cnt % 2 == 0) {
        sets1("O");
      }
      else {
        sets1("X");
      }
      win();
      cnt++;
    }
  }
  function b2() {
    if (s2 == 0) {
      if (cnt % 2 == 0) {
        sets2("O");
      }
      else {
        sets2("X");
      }
      win();
      cnt++;
    }
  }
  function b3() {
    if (s3 == 0) {
      if (cnt % 2 == 0) {
        sets3("O");
      }
      else {
        sets3("X");
      }
      win();
      cnt++;
    }
  }
  function b4() {
    if (s4 == 0) {
      if (cnt % 2 == 0) {
        sets4("O");
      }
      else {
        sets4("X");
      }
      win();
      cnt++;
    }
  }
  function b5() {
    if (s5 == 0) {
      if (cnt % 2 == 0) {
        sets5("O");
      }
      else {
        sets5("X");
      }
      win();
      cnt++;
    }
  }
  function b6() {
    if (s6 == 0) {
      if (cnt % 2 == 0) {
        sets6("O");
      }
      else {
        sets6("X");
      }
      win();
      cnt++;
    }
  }
  function b7() {
    if (s7 == 0) {
      if (cnt % 2 == 0) {
        sets7("O");
      }
      else {
        sets7("X");
      }
      win();
      cnt++;
    }
  }
  function b8() {
    if (s8 == 0) {
      if (cnt % 2 == 0) {
        sets8("O");
      }
      else {
        sets8("X");
      }
      win();
      cnt++;;
    }
  }
  function b9() {
    if (s9 == 0) {
      if (cnt % 2 == 0) {
        sets9("O");
      }
      else {
        sets9("X");
      }
      win();
      cnt++;
    }
  }
  function win(){
    var d1=s1;
    var d2=s2;
    var d3=s3;
    var d4=s4;
    var d5=s5;
    var d6=s6;
    var d7=s7;
    var d8=s8;
    var d9=s9;


    // player O win condition

    if(d1=="O" && d2=="O" && d3=="O"){
      setcall("PLAYER O WIN");
      setf1(true);
    }
    else if(d4=="O" && d5=="O" && d6=="O"){
      setcall("PLAYER O WIN");
      setf1(true);
    }
    else if(d7=="O" && d8=="O" && d9=="O"){
      setcall("PLAYER O WIN");
      setf1(true);
    }
    else if(d1=="O" && d4=="O" && d7=="O"){
      setcall("PLAYER O WIN");
      setf1(true);
    }
    else if(d2=="O" && d5=="O" && d8=="O"){
      setcall("PLAYER O WIN");
      setf1(true);
    }
    else if(d3=="O" && d6=="O" && d9=="O"){
      setcall("PLAYER O WIN");
      setf1(true);
    }
    else if(d1=="O" && d5=="O" && d9=="O"){
      setcall("PLAYER O WIN");
      setf1(true);
    }
    else if(d3=="O" && d5=="O" && d7=="O"){
      setcall("PLAYER O WIN");
      setf1(true);
    }
  

    //player X win condition

    if(d1=="X" && d2=="X" && d3=="X"){
      setcall("PLAYER X WIN");
      setf1(true);
    }
    else if(d4=="X" && d5=="X" && d6=="X"){
      setcall("PLAYER X WIN");
      setf1(true);
    }
    else if(d7=="X" && d8=="X" && d9=="X"){
      setcall("PLAYER X WIN");
      setf1(true);
    }
    else if(d1=="X" && d4=="X" && d7=="X"){
      setcall("PLAYER X WIN");
      setf1(true);
    }
    else if(d2=="X" && d5=="X" && d8=="X"){
      setcall("PLAYER X WIN");
      setf1(true);
    }
    else if(d3=="X" && d6=="X" && d9=="X"){
      setcall("PLAYER X WIN");
      setf1(true);
    }
    else if(d1=="X" && d5=="X" && d9=="X"){
      setcall("PLAYER X WIN");
      setf1(true);
    }
    else if(d3=="X" && d5=="X" && d7=="X"){
      setcall("PLAYER X WIN");
      setf1(true);
    } 
    else if(cnt == 9){
      setcall("MATCH TIE");
      setf1(true); 
    }
  }



  return (
    <>
      <div>
        <h1 className='r3'>TIC-TAC-TOE</h1>
      </div>
      <div>
        <table className='r1' align='center' cellSpacing="5px">
          <tr>
            <td><input className='r4' type="button" value={s1} onClick={b1} disabled={f1}></input></td>
            <td><input className='r4' type="button" value={s2} onClick={b2} disabled={f1}></input></td>
            <td><input className='r4' type="button" value={s3} onClick={b3} disabled={f1}></input></td>
          </tr>
          <tr>
            <td><input className='r4' type="button" value={s4} onClick={b4} disabled={f1}></input></td>
            <td><input className='r4' type="button" value={s5} onClick={b5} disabled={f1}></input></td>
            <td><input className='r4' type="button" value={s6} onClick={b6} disabled={f1}></input></td>
          </tr>
          <tr>
            <td><input className='r4' type="button" value={s7} onClick={b7} disabled={f1}></input></td>
            <td><input className='r4' type="button" value={s8} onClick={b8} disabled={f1}></input></td>
            <td><input className='r4' type="button" value={s9} onClick={b9} disabled={f1}></input></td>
          </tr>
        </table>
        </div> 

        <div align="center" className='r6'>
        <input type="textbox" value={call} readOnly className='r5'/>
        </div>
     
    
    </>
  );
}

export default App;
