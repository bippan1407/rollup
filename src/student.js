console.log("This is student");
const student = "Student A";
const studentName = "bippan";
function getStudentName() {
  getTeacherName();
  return studentName;
}

function getTeacherName() {
  import("./teacher.js").then(({ default: teacher }) =>
    console.log({ teacher })
  );
}

function studentMarks() {
  const maths = 10;
  const physics = 9;
  return {
    maths,
    physics,
  };
}

export { student, getStudentName, studentMarks };
