// ReactDOM.render(<h1>Hello everyone</h1>, document.getElementById("root"));
ReactDOM.render(<p>Hi my name is Jacek </p>, document.getElementById("root"));

ReactDOM.render(
  <ul>
    <li> First List</li>
    <li>Second List</li>
  </ul>,
  document.getElementById("root")
);

function MainContent() {
  return <h1> I'am learning React!!!</h1>;
}
ReactDOM.render(
  <div>
    <MainContent />
  </div>,
  document.getElementById("root")
);
const h1 = docume.createElemetn('h1')
h1.textContent = 