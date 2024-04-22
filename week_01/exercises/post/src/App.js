import React from 'react';
import Post from './components/post';

function App() {
  return (
    <div className="App">
      {/* Eerste instantie van het Post-component */}
      <Post
        title="Titel van de eerste post"
        synopsis="Korte samenvatting van de eerste post"
        story="Volledig verhaal van de eerste post"
        author={{
          name: "Auteur 1",
          picture: "url_naar_afbeelding_1"
        }}
      />

      
      <Post
        title="Titel van de tweede post"
        synopsis="Korte samenvatting van de tweede post"
        story="Volledig verhaal van de tweede post"
        author={{
          name: "Auteur 2",
          picture: "url_naar_afbeelding_2"
        }}
      />

     
      <Post
        title="Titel van de derde post"
        synopsis="Korte samenvatting van de derde post"
        story="Volledig verhaal van de derde post"
        author={{
          name: "Auteur 3",
          picture: "url_naar_afbeelding_3"
        }}
      />
    </div>
  );
}

export default App;

