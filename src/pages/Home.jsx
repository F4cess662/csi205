import Profile from "../assets/img/human.png"

const Home = () => {
  return (
    <div>
      <div>
        <img
          className="w-25 h-25 d-block mx-auto mt-2"
          src={Profile}
          alt=""
        />
      </div>
      <br />
      <div>
        <h1
          className="text-center text-white bg-success mb-3 mx-auto rounded-3"
          style={{ width: "30%" }}
        >
          About me
        </h1>
        <p
          className="fs-5 bg-success-subtle p-2 rounded-4"
          style={{ color: "#002702ff" }}
        >
          <b>ชื่อ-นามสกุล:</b> นายสุทธิพงศ์ สัมฤทธิ์ <br />
          <b>ชื่อเล่น:</b> ฟอร์ด <br />
          <b>ปัจจุบันศึกษาที่:</b> มหาวิทยาลัยศรีปทุม <br />
          <b>คณะ:</b> เทคโนโลยีสารสนเทศ <br />
          <b>สาขา:</b> วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
          <br />
          <b>ชั้นปีที่:</b> 2 <br />
          <b>รหัสนักศึกษา:</b> 67149922 <br />
          <b>งานอดิเรก:</b> หาของกินอร่อยๆ , เล่นกีฬาบาสเกตบอล , ฟังเพลง ,
          เล่นเกม
          <br />
          <b>สิ่งที่ชอบ:</b> เล่นกีฬา , หารายได้เพิ่ม ,
          การเริ่มต้นทำอะไรบางสิ่งที่ไม่เคยทำ
          <br />
          <b>สิ่งที่ไม่ชอบ:</b> อยู่ในกรอบ , อยู่กับที่นานๆ ,
          การโดนบังคับทำสิ่งที่ไม่อยากทำ
          <br />
        </p>
      </div>
    </div>
  );
};
export default Home;
