import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "사용자",
    content: "내용",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "사용자2",
    content: "내용2",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "사용자3",
    content: "내용3",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};
export default App;
