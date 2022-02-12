import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header class="uva_font rainbow">
                <p><a href="/">@malvabombom</a></p>
            </header>
            <div class="marvel">
                <section class="marvel__intro">
                    <h1 class="shake_it"><img src="./source/img/martin-logo.png" alt=""/>Hi, I’m <span class="marker">Martin</span> <span
                            class="wave">👋</span></h1>
                    <p class="rainbow">Developer, Designer & Maker</p>
                </section>
                <section class="marvel__section">
                    <h2><span class="marker">About</span> me</h2>
                    <p>I'm a <span class="uva_font">Software Engineer</span> based in <span class="uva_font">LATAM</span> trying
                        to be a recognized chef 👨‍🍳
                        , but while figuring out how to turn on the stove I happily <span class="uva_font">develop
                            software</span> 🧑🏽‍💻</p>
                </section>
                <section class="marvel__section">
                    <h2><span class="marker">Tools</span> I use</h2>
                    <p>I usually work with <span class="uva_font">Python, JavaScript, Typescript,</span> and their frameworks
                        like <span class="uva_font">Django, Flask, Angular, React</span> and <span class="uva_font">Vue,</span>
                        but I don't limit myself to just these languages ​​and their tools, since I work comfortably with <span
                            class="uva_font">Figma,
                            GitHub, Spark AR, Unity</span> and <span class="uva_font">Xcode</span> for development and UI/UX
                        design.</p>
                    <div class="marvel__flex">
                        <img src="./source/img/tool_01.png" alt="" class="marvel__card slow_shake_it"/>
                        <img src="./source/img/tool_02.png" alt="" class="marvel__card slow_shake_it"/>
                        <img src="./source/img/tool_03.png" alt="" class="marvel__card slow_shake_it"/>
                        <img src="./source/img/tool_04.png" alt="" class="marvel__card slow_shake_it"/>
                    </div>
                </section>
                <section class="marvel__section">
                    <h2><span class="marker">Projects</span></h2>
                    <p>I'm Working full-time at <a href="https://www.globant.com/" target="_blank"
                            class="uva_font rainbow">Globant</a> while I study a <a
                            href="https://www.sps.nyu.edu/homepage/academics/divisions-and-departments/division-of-applied-undergraduate-studies/credit-for-nyux-microbachelors-programs.html"
                            target="_blank" class="uva_font rainbow">MicroBachelors® in Computer Science</a>,
                        But I'm open to experimenting and working on projects that are of interest to me, some of which you can
                        see here <span class="wave">👇</span></p>
                    <div class="grid gap-4">
                        <a href="https://devpost.com/software/sayme" target="_blank" class="marvel__project medium_shake_it">
                            <img src="./source/img/project_sayme.png" alt=""/>
                        </a>
                        <a href="https://devpost.com/software/spart-ar" target="_blank" class="marvel__project medium_shake_it">
                            <img src="./source/img/project_artSeries.png" alt=""/>
                        </a>
                    </div>
                </section>
                <section class="marvel__section">
                    <h2><span class="marker">Contanct</span> me</h2>
                    <p>You can find more information about my work and contact me in the next links <span class="wave">👀</span>
                    </p>
                    <div class="stage">
                        <a href="https://github.com/malvabombom" target="_blank" class="fa fa-github box jump"></a>
                        <a href="https://twitter.com/malvabombom" target="_blank" class="fa fa-twitter box jump"></a>
                        <a href="https://codepen.io/malvabombom" target="_blank" class="fa fa-codepen box jump"></a>
                        <a href="https://dribbble.com/malvabombom" target="_blank" class="fa fa-dribbble box jump"></a>
                        <a href="https://www.linkedin.com/in/martin-manriquez-899877177/" target="_blank"
                            class="fa fa-linkedin box jump"></a>
                        <a href="https://www.youtube.com/c/MetaDeveloperCircleCiudaddeMexico" target="_blank"
                            class="fa fa-youtube box jump"></a>
                    </div>
                </section>
            </div>
            <footer class="rainbow">
                Made with 🌮 and Good Vibes 🍟
            </footer>
        </div>
    );
}

export default App;
