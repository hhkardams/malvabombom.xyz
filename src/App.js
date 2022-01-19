import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="rainbow"> <p> <a href="https://twitter.com/malvabombom">@malvabombom</a></p> </header>
      <div class="marvel">
        <section class="marvel__intro">
            <h1 class="shake_it">Hi, I’m <span class="marker">Martin</span> <span class="wave">👋</span></h1> 
            <p class="rainbow">Developer, Designer & Maker</p>
        </section>
        <section class="marvel__section">
            <h2><span class="marker">About</span> me</h2>
            <p>I'm a <span class="rainbow">Software Engineer</span> based in Latam trying to be a recognized chef 👨‍🍳 , but while figuring out how to turning on the stove I happily <span class="rainbow">develop software</span> 🧑🏽‍💻</p>
        </section>
        <section class="marvel__section">
            <h2><span class="marker">Tools</span> I use</h2>
            <div class="marvel__flex">
                <div class="marvel__card slow_shake_it"></div>
                <div class="marvel__card slow_shake_it"></div>
                <div class="marvel__card slow_shake_it"></div>
                <div class="marvel__card slow_shake_it"></div>
                <div class="marvel__card slow_shake_it"></div>
                <div class="marvel__card slow_shake_it"></div>
            </div>
        </section>
        <section class="marvel__section">
            <h2><span class="marker">Projects</span></h2>
            <div class="grid grid-cols-3 gap-4">
                <div class="marvel__project shake_it"></div>
                <div class="marvel__project shake_it"></div>
                <div class="marvel__project shake_it"></div>
                <div class="marvel__project shake_it"></div>
            </div>
        </section>
        <section class="marvel__section">
            <h2><span class="marker">Contanct</span> me</h2>
            <div class="stage">
                <a href="https://github.com/malvabombom" class="fa fa-github box jump"></a>
                <a href="https://twitter.com/malvabombom" class="fa fa-twitter box jump"></a>
                <a href="https://codepen.io/malvabombom" class="fa fa-codepen box jump"></a>
                <a href="https://dribbble.com/malvabombom" class="fa fa-dribbble box jump"></a>
                <a href="https://www.linkedin.com/in/martin-manriquez-899877177/" class="fa fa-linkedin box jump"></a>
                <a href="https://www.youtube.com/c/MetaDeveloperCircleCiudaddeMexico" class="fa fa-youtube box jump"></a>
            </div>
        </section>
      </div>
      <footer>
          Made with 🌮 and Good Vibes 🍟
      </footer>
    </div>
  );
}

export default App;
