import React from "react";

// Components
import Header from "components/Header";
import Display from "components/Display";
import Keyboard from "components/Keyboard";

const App: React.FC = () => {
  return (
    <div className="mx-auto w-96 px-5 py-16">
      <Header />

      <Display />

      <Keyboard />
    </div>
  );
};

export default App;
