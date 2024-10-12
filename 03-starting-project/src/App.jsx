import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please click a button</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map(conceptItem => 
              <CoreConcept {...conceptItem} key={conceptItem.title}/>  
            )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")} isSelected={selectedTopic === 'components'}>
              Component
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")} isSelected={selectedTopic === 'jsx'} >JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")} isSelected={selectedTopic === 'props'}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")} isSelected={selectedTopic === 'state'}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
