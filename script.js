function generate() {
    let input = document.getElementById("input").value.toLowerCase();
    let result = document.getElementById("result");
    
    if(input.includes("coding")) {
    result.innerHTML = `
    <h3>💻 Coding Roadmap</h3>

    🔹 Start with <b>HTML, CSS, JavaScript</b><br>
    🔹 Daily practice + small projects banao<br>
    🔹 Git & GitHub seekho<br>
    🔹 Basic DSA (logic strong karo)<br><br>
    🔹 Logic Building + DSA<br><br>
    🔹 Framework (React / Next.js)<br><br>

    <h4>🔥 Top YouTube Creators:</h4>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/@CodeWithHarry" target="_blank">CodeWithHarry</a>
    </div>    

    <div class="creator">
        🎥 <a href="https://www.youtube.com/@ApnaCollegeOfficial" target="_blank">Apna College</a>
    </div>   

    <div class="creator">
        🎥 <a href="https://www.youtube.com/@freecodecamp" target="_blank">freeCodeCamp</a>
    </div>

   <h4>🧰 Useful Tools:</h4>
    💻 <a href="https://code.visualstudio.com/" target="_blank">VS Code</a><br>
    🌐 <a href="https://developer.chrome.com/docs/devtools/" target="_blank">Chrome DevTools</a><br>
    🎨 <a href="https://www.figma.com/" target="_blank">Figma</a><br>
    🔗 <a href="https://github.com/" target="_blank">GitHub</a><br><br>
    
    <h4>🎓 Learning Options (Recommended)</h4>

    ✔ Offline Institutes (Personal Guidance)<br>
   🔹 Nearby computer institutes for hands-on training<br>
   🔹 Doubt clearing + practical environment<br><br>

    💡 <b>Pro Tips:</b><br>

    🚀 Daily 1 hour coding<br>
    🧪 Practice projects banao<br>
    🔥 Consistency is key<br><br>

    ✨ <i>Bonus: Frontend + Backend dono seekho = Full Stack Developer 💪</i>
    `;
}
    else if(input.includes("youtube")) {
    result.innerHTML = `
    <h3>🎥 YouTube Creator Roadmap</h3>

    🔹 Step 1: <b>Niche choose karo</b> (Tech, Gaming, Vlog, Education, Comedy)<br>
    🔹 Step 2: <b>Content Strategy</b> (Shorts + Long videos combo)<br>
    🔹 Step 3: <b>Thumbnail + Editing</b> (CTR boost)<br>
    🔹 Step 4: <b>Consistency</b> (weekly 2–3 videos)<br>
    🔹 Step 5: <b>Audience Engagement</b> (reply + polls)<br><br>

    <h4>🔥 Top YouTube Creators:</h4>

    <div class="creator">🎥 <a href="https://www.youtube.com/@CarryMinati" target="_blank">CarryMinati</a></div>
    <div class="creator">🎥 <a href="https://www.youtube.com/@TechBurner" target="_blank">Tech Burner</a></div>
    <div class="creator">🎥 <a href="https://www.youtube.com/@BBKiVines" target="_blank">BB Ki Vines</a></div>
    <div class="creator">🎥 <a href="https://www.youtube.com/@GamerFleet" target="_blank">Gamer Fleet</a></div>
    <div class="creator">🎥 <a href="https://www.youtube.com/@ElvishYadavVlogs" target="_blank">Elvish Yadav Vlogs</a></div>
    <div class="creator">🎥 <a href="https://www.youtube.com/@Anshulvermavine8055" target="_blank">Anshul Verma Vines</a></div>

    <h4>🔍 SEO (Search Engine Optimization)</h4>
    ✔ Keyword-rich title likho<br>
    ✔ Description me keywords + timestamps add karo<br>
    ✔ Tags + hashtags (#shorts #viral)<br>
    ✔ Thumbnail attractive rakho (CTR high)<br><br>

    <h4>📈 Growth Strategy (Advanced)</h4>
    🚀 Shorts se fast reach lo + Long videos se watch time<br>
    🔥 Trending topics pe jaldi video banao (early advantage)<br>
    📊 Analytics check karo (watch time, CTR improve karo)<br>
    🤝 Collaboration karo dusre creators ke saath<br>
    🔁 Viral video ka similar content banao (repeat success)<br><br>

    <h4>⚡ Growth Hacks (Secret Tips)</h4>
    🎯 First 5–10 sec = Hook (warna audience skip)<br>
    ⏱ Video length perfect rakho (na zyada lamba na short)<br>
    🔄 Same topic pe series banao (audience retain hoti hai)<br>
    📌 End screen + cards use karo (next video push)<br>
    💬 Comments me question pucho (engagement boost)<br><br>

    <h4>💰 Monetization</h4>
    💵 AdSense (1000 subs + 4000 watch hours)<br>
    🤝 Sponsorships<br>
    🛍 Affiliate marketing<br>
    🎯 Brand deals<br><br>

    <h4>🧰 Useful Tools</h4>
    ✂️ <a href="https://www.capcut.com/" target="_blank">CapCut</a><br>
    🎨 <a href="https://www.canva.com/" target="_blank">Canva</a><br>
    🔍 <a href="https://vidiq.com/" target="_blank">VidIQ</a><br>
    📊 <a href="https://studio.youtube.com/" target="_blank">YouTube Studio</a><br><br>

    <h4>💡 Pro Tips</h4>
    🔥 Consistency > Motivation<br>
    📅 Fixed schedule rakho<br>
    🎯 Ek niche pe focus karo<br>
    🚀 90 days tak give up mat karo<br><br>

    ✨ <i>Bonus: Personal brand build karo = long-term success 💪</i>
    `;
}

else if(input.includes("job") || input.includes("internship")) {
    result.innerHTML = `
    <h3>💼 Jobs, Internships & Govt Jobs</h3>

    <h4>🔥 Top Job Platforms:</h4>

    <div class="creator">
        🌐 <a href="https://www.naukri.com" target="_blank">Naukri.com</a>
    </div>

    <div class="creator">
        🌐 <a href="https://www.indeed.com" target="_blank">Indeed</a>
    </div>

    <div class="creator">
        🎓 <a href="https://internshala.com" target="_blank">Internshala (Internships)</a>
    </div>

    <div class="creator">
        💼 <a href="https://www.linkedin.com/jobs" target="_blank">LinkedIn Jobs</a>
    </div>

    <div class="creator">
        🚀 <a href="https://wellfound.com/" target="_blank">Wellfound (Startups)</a>
    </div>

    <h4>🏛 Government Job Portals:</h4>

    <div class="creator">
        🇮🇳 <a href="https://www.upsc.gov.in/" target="_blank">UPSC</a>
    </div>

    <div class="creator">
        🏦 <a href="https://www.ibps.in/" target="_blank">IBPS (Bank Jobs)</a>
    </div>

    <div class="creator">
        🚆 <a href="https://www.rrbcdg.gov.in/" target="_blank">Railway Jobs (RRB)</a>
    </div>

    <div class="creator">
        🪖 <a href="https://joinindianarmy.nic.in/" target="_blank">Indian Army</a>
    </div>

    <div class="creator">
        📢 <a href="https://ssc.nic.in/" target="_blank">SSC (Govt Exams)</a>
    </div>

    <h4>📈 Job Strategy (Must Follow)</h4>
    🚀 Daily 5–10 applications karo<br>
    🎯 Resume har job ke hisab se customize karo<br>
    📊 LinkedIn profile strong banao<br>
    🤝 Networking karo (connections build karo)<br><br>

    <h4>🧠 Skills That Get You Hired</h4>
    💻 Coding / Technical Skills<br>
    🗣 Communication Skills<br>
    📊 Problem Solving<br>
    ⚡ Real Projects Experience<br><br>

    <h4>🧰 Useful Tools</h4>
    📄 <a href="https://www.canva.com/resumes/" target="_blank">Resume Builder (Canva)</a><br>
    📊 <a href="https://www.linkedin.com/" target="_blank">LinkedIn Profile</a><br>
    💡 <a href="https://www.glassdoor.com/" target="_blank">Glassdoor (Salary + Reviews)</a><br><br>

    <h4>💡 Pro Tips</h4>
    🔥 Consistency = Job<br>
    📅 Daily apply + follow-up karo<br>
    🎯 Fake jobs se bachke raho<br>
    🚀 Skills + Projects = Selection<br><br>

    ✨ <i>Bonus: Internship → Experience → Job (Best Path 💪)</i>
    `;
}

else if(
    input.toLowerCase().includes("dance") || 
    input.toLowerCase().includes("dancing") || 
    input.toLowerCase().includes("dj") || 
    input.toLowerCase().includes("anchoring") || 
    input.toLowerCase().includes("anchor")
) {
    result.innerHTML = `
    <h3>💃 Dancing, DJ & Anchoring Guide</h3>

    <h4>💃 Dancing सीखो</h4>
    🔹 Step 1: Basic steps se start karo<br>
    🔹 Step 2: Daily practice karo<br>
    🔹 Step 3: Music ke sath rhythm pakdo<br>
    🔹 Step 4: Mirror practice + recording karo<br><br>

    <h4>🔥 Dance Styles:</h4>
    👉 Hip Hop 🕺<br>
    👉 Bollywood 💃<br>
    👉 Freestyle 😎<br>
    👉 Contemporary 🌊<br><br>

    <h4>🎧 DJ Skills सीखो</h4>
    🔹 Beat matching (songs mix karna)<br>
    🔹 Basic DJ software use karo<br>
    🔹 Playlist build karo (party vibe)<br>
    🔹 Crowd mood samjho<br><br>

    <h4>🎤 Anchoring Skills</h4>
    🔹 Confidence + clear voice<br>
    🔹 Script preparation karo<br>
    🔹 Audience engage karo (questions + energy)<br>
    🔹 Body language strong rakho<br><br>

    <h4>🎥 Learn from YouTube:</h4>

    <div class="creator">
        💃 <a href="https://www.youtube.com/results?search_query=dance+for+beginners" target="_blank">
        Dance for Beginners
        </a>
    </div>

    <div class="creator">
        💃 <a href="https://www.youtube.com/results?search_query=bollywood+dance+tutorial" target="_blank">
        Bollywood Dance Tutorial
        </a>
    </div>

    <div class="creator">
        🎧 <a href="https://www.youtube.com/results?search_query=dj+mixing+for+beginners" target="_blank">
        DJ Mixing for Beginners
        </a>
    </div>

    <div class="creator">
        🎤 <a href="https://www.youtube.com/results?search_query=anchoring+tutorial+for+beginners" target="_blank">
        Anchoring Tutorial
        </a>
    </div>

    <h4>🧰 Useful Tools</h4>
    🎧 <a href="https://www.virtualdj.com/" target="_blank">Virtual DJ</a><br>
    🎵 <a href="https://www.serato.com/" target="_blank">Serato DJ</a><br>
    🎤 Voice recorder (practice ke liye)<br><br>

    <h4>📈 Growth Strategy</h4>
    📱 Instagram Reels banao<br>
    🎤 Events me participate karo<br>
    🔥 Stage pe perform karo<br>
    🚀 Talent showcase karo<br><br>

    <h4>💡 Pro Tips</h4>
    🔥 Practice + Confidence = Success<br>
    🎯 Stage fear hatao (small events se start karo)<br>
    😎 Energy high rakho (audience connect hoti hai)<br>
    🚀 Consistency = Performer Growth<br><br>

    ✨ <i>Bonus: Dance + DJ + Anchoring = Full Entertainer 🔥💪</i>
    `;
}

else if(
    input.includes("entrepreneur") || 
    input.includes("entrepreneurship") || 
    input.includes("startup") || 
    input.includes("business")
) {
    result.innerHTML = `
    <h3>🚀 Entrepreneurship Roadmap</h3>

    🔹 Step 1: Business ideas samjho<br>
    🔹 Step 2: Problem identify karo<br>
    🔹 Step 3: Market research karo<br>
    🔹 Step 4: Small start karo<br>
    🔹 Step 5: MVP (Minimum Product) banao<br>
    🔹 Step 6: Marketing seekho (Instagram, Ads)<br>
    🔹 Step 7: Customer feedback lo<br>
    🔹 Step 8: Scale your business 🚀<br><br>
    <h4>🔥 Learn From:</h4>
    🔹 YouTube: Startup India<br>
    
    🔹 <a href="https://www.youtube.com/@startupindiaofficial" target="_blank">Startup India</a><br>
    
    🔹 Books: Rich Dad Poor Dad<br><br>

    <h4>💡 Business Ideas:</h4>
    🔹 Dropshipping<br>
    🔹 Freelancing<br>
    🔹 YouTube Channel<br>
    🔹 Digital Products<br>
    <h4>🔥 Top Creators:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/@AnkurWarikoo" target="_blank">Ankur Warikoo</a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/@RajShamani" target="_blank">Raj Shamani</a>
    </div>

    <br><br>
    💡 Tip: Be your own boss 💼
    `;
}

else if(input.includes("singing")) {
    result.innerHTML = `
    <h3>🎤 Singing Roadmap</h3>

    🔹 Daily riyaaz karo (15–30 min minimum)<br>
    🔹 Sur, scale aur pitch samjho<br>
    🔹 Breathing control improve karo<br>
    🔹 Songs practice karo (easy → hard)<br>
    🔹 Apni voice record karke analyze karo<br><br>

    <h4>🎶 Singing Types:</h4>
    👉 Bollywood 🎬<br>
    👉 Classical 🎼<br>
    👉 Indie / Pop 🎧<br>
    👉 Rap / Hip-Hop 🔥<br><br>

    <h4>🔥 Top Creators:</h4>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/@SingingSimplified" target="_blank">Singing Simplified</a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/@siddharthslathiaofficial" target="_blank">Siddharth Slathia</a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=indian+classical+singing+lessons" target="_blank">
        Classical Singing Lessons
        </a>
    </div>

    <h4>🧰 Useful Tools</h4>
    🎹 <a href="https://www.onlinepianist.com/virtual-piano" target="_blank">Virtual Piano</a><br>
    🎤 Voice Recorder (practice ke liye)<br>
    🎵 <a href="https://www.smule.com/" target="_blank">Smule (singing app)</a><br><br>

    <h4>📈 Growth Tips</h4>
    🚀 Instagram Reels / YouTube Shorts pe singing videos daalo<br>
    🎧 Trending songs cover karo<br>
    🤝 Collaboration karo dusre singers ke sath<br>
    💬 Audience feedback lo aur improve karo<br><br>

    <h4>💡 Pro Tips</h4>
    🔥 Consistency = Better Voice<br>
    🎯 Sur galat ho to slow practice karo<br>
    🎤 Mic handling bhi seekho<br>
    🚀 Confidence ke sath perform karo<br><br>

    ✨ <i>Bonus: Singing + Social Media = Fame + Opportunities 💫</i>
    `;
}

else if(input.includes("11") || input.includes("11th")) {
    result.innerHTML = `
    <h3>🎓 After 10th – Stream Selection Guide</h3>

    <h4>📚 Available Streams:</h4>
    🔹 Science (Doctor / Engineer / Research) 🧪<br>
    🔹 Commerce (Business / CA / Finance) 💰<br>
    🔹 Arts (UPSC / Teacher / Govt Jobs) 📖<br><br>

    <h4>🧠 Kaise Choose Kare?</h4>
    👉 Apna interest aur passion identify karo<br>
    👉 Strength dekho (Maths strong hai ya theory?)<br>
    👉 Future career options research karo<br>
    👉 Parents + teachers se guidance lo<br><br>

    <h4>📊 Stream Wise Skills:</h4>
    🔬 Science → Analytical thinking, problem solving<br>
    📈 Commerce → Numbers, business mindset<br>
    📝 Arts → Creativity, writing, understanding society<br><br>

    <h4>⚠️ Common Mistakes:</h4>
    ❌ Friends ko dekh ke stream choose karna<br>
    ❌ Sirf marks ke basis pe decision lena<br>
    ❌ Without research choose kar lena<br><br>

    <h4>🚀 Pro Tips:</h4>
    ✅ YouTube pe career videos dekho<br>
    ✅ 1–2 din research karo har stream pe<br>
    ✅ Demo classes try karo (agar possible ho)<br><br>

    <h4>🎯 Bonus:</h4>
    💡 Agar confuse ho to Science lena safe option hota hai (baad me switch possible hota hai)<br><br>

    🔥 Final Tip: Apna decision khud lo — ye tumhari life hai 🚀
    `;
}

else if(
    input.toLowerCase().includes("actor") || 
    input.toLowerCase().includes("acting") || 
    input.toLowerCase().includes("director") || 
    input.toLowerCase().includes("producer") ||
    input.toLowerCase().includes("film")
) {
    result.innerHTML = `
    <h3>🎬 Film Industry Career Guide</h3>

    <h4>🎭 Actor Kaise Bane</h4>
    🔹 Acting practice karo (mirror + camera)<br>
    🔹 Dialogue delivery improve karo<br>
    🔹 Expressions (happy, sad, angry) practice karo<br>
    🔹 Reels / short videos banao<br>
    🔹 Auditions dena start karo<br><br>

    <h4>🎬 Director Kaise Bane</h4>
    🔹 Storytelling + script writing seekho<br>
    🔹 Camera angles samjho (wide, close-up)<br>
    🔹 Scene planning aur shooting seekho<br>
    🔹 Actors ko guide karna seekho<br>
    🔹 Short films bana ke practice karo<br><br>

    <h4>💼 Producer Kaise Bane</h4>
    🔹 Budget planning samjho<br>
    🔹 Team manage karna seekho<br>
    🔹 Project ko start se finish tak handle karo<br>
    🔹 Networking build karo (contacts important)<br><br>

    <h4>🎥 Learn from YouTube</h4>

    <div class="creator">
        🎭 <a href="https://www.youtube.com/results?search_query=acting+tutorial+for+beginners" target="_blank">
        Acting Tutorials
        </a>
    </div>

    <div class="creator">
        🎬 <a href="https://www.youtube.com/results?search_query=filmmaking+for+beginners" target="_blank">
        Filmmaking Guide
        </a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=how+to+become+film+director" target="_blank">
        Become Director
        </a>
    </div>

    <h4>🧰 Useful Tools</h4>
    🎬 Camera / Mobile shooting<br>
    🎤 Mic for clear audio<br>
    ✂️ Editing apps (CapCut, Premiere)<br>
    🎨 Canva (poster / thumbnail)<br><br>

    <h4>💰 Earning Options</h4>
    💵 Acting roles / auditions<br>
    💵 YouTube / short films<br>
    💵 Ads / brand promotions<br>
    💵 Film production projects<br><br>

    <h4>📈 Growth Strategy</h4>
    📱 Instagram + YouTube pe content upload karo<br>
    🎯 Apna unique style banao<br>
    🤝 Industry contacts build karo<br>
    🔥 Consistency maintain karo<br><br>

    <h4>💡 Pro Tips</h4>
    🔥 Camera confidence build karo<br>
    🎯 Rejection se daro mat (normal hai)<br>
    😎 Small start → big success<br>
    🚀 Skills + patience = success<br><br>

    ✨ <i>Bonus: Passion + Consistency = Film Industry Entry 🎬🔥</i>
    `;
}

else if(input.includes("12") || input.includes("12th") || input.includes("career")) {
    result.innerHTML = `
    <h3>🎯 After 12th – Career Options Guide</h3>

    <h4>🧪 Science Students:</h4>
    👉 B.Tech / Engineering (Software, Mechanical, Civil)<br>
    👉 MBBS / Medical (Doctor, Dentist, Pharmacist)<br>
    👉 B.Sc (Research / Scientist)<br>
    👉 BCA (Computer Applications / Coding) 💻<br><br>

    <h4>💰 Commerce Students:</h4>
    👉 B.Com / CA / CS / CMA<br>
    👉 BBA / MBA (Business Management)<br>
    👉 Banking / Finance Jobs<br>
    👉 BCA (IT Field me entry possible) 💻<br><br>

    <h4>📚 Arts Students:</h4>
    👉 BA (History, Political Science, Psychology)<br>
    👉 UPSC / SSC / Govt Jobs<br>
    👉 Teaching / Journalism / Law<br>
    👉 BCA (Agar interest ho computers me) 💻<br><br>

    <h4>💻 High Income Skills (Sabke liye):</h4>
    👉 Coding / Web Development 💻<br>
    👉 Digital Marketing 📈<br>
    👉 Video Editing 🎬<br>
    👉 Freelancing 🌍<br><br>

    <h4>🧠 Kaise Choose Kare?</h4>
    👉 Interest + passion identify karo<br>
    👉 Market demand check karo<br>
    👉 Course ki duration & fees samjho<br>
    👉 Future salary & growth dekho<br><br>

    <h4>⚠️ Common Mistakes:</h4>
    ❌ Sirf degree ke piche bhaagna<br>
    ❌ Bina research course choose karna<br>
    ❌ Trend follow karna bina interest ke<br><br>

    <h4>🚀 Pro Tips:</h4>
    ✅ College + skill dono important hai<br>
    ✅ Side me skill develop karo (coding, marketing)<br>
    ✅ Internship jaldi start karo<br><br>

    <h4>🎯 Bonus:</h4>
    💡 BCA + MCA = Strong IT Career 🚀<br>
    💡 BCA ke baad Software Developer, Web Developer ban sakte ho<br><br>

    🔥 Final Tip: Degree se job milti hai, skill se growth hoti hai 🚀
    `;
}

else if(input.includes("engineering college")) {
    result.innerHTML = `
    <h3>🎓 Top Engineering Colleges (India)</h3>

      <a href="https://www.iitm.ac.in" target="_blank">IIT Madras</a> <br>
      <a href="https://home.iitd.ac.in" target="_blank">IIT Delhi</a>  <br>
      <a href="https://www.iitb.ac.in" target="_blank">IIT Bombay</a>  <br>
      <a href="https://www.bits-pilani.ac.in" target="_blank">BITS Pilani</a>  <br>
      <a href="https://www.iitk.ac.in" target="_blank">IIT Kanpur</a> <br>
      <a href="https://www.iitkgp.ac.in" target="_blank">IIT Kharagpur</a> <br>
      <a href="https://vit.ac.in" target="_blank">VIT Vellore</a> <br>
      <a href="https://www.srmist.edu.in" target="_blank">SRM University</a> <br>
      <a href="http://dtu.ac.in" target="_blank">DTU Delhi</a> <br>
      <a href="https://www.nitt.edu" target="_blank">NIT Trichy</a> <br>
      <a href="https://www.iimtindia.net" target="_blank">IIMT University Meerut</a> <br>
      <a href="https://www.subharti.org" target="_blank">Subharti University</a> <br>
      <a href="https://www.abes.ac.in" target="_blank">ABES Engineering College</a> <br>
      <a href="https://www.amity.edu/noida" target="_blank">Amity University, Noida</a> <br>
      <a href="https://www.sharda.ac.in" target="_blank">Sharda University</a> <br>
      <a href="https://www.galgotiasuniversity.edu.in" target="_blank">Galgotias University</a> <br>
      <a href="https://www.niet.co.in" target="_blank">NIET Noida</a> <br>

    `;
}

else if(input.includes("mbbs") || input.includes("medical college")) {
    result.innerHTML = `
    <h3>🏥 Top MBBS Colleges (India)</h3>

      <a href="https://www.aiims.edu" target="_blank">AIIMS Delhi</a> <br>
      <a href="https://www.cmch-vellore.edu" target="_blank">CMC Vellore</a> <br>
      <a href="https://afmc.nic.in" target="_blank">AFMC Pune</a> <br>
      <a href="https://jipmer.edu.in" target="_blank">JIPMER Puducherry</a> <br>
      <a href="https://kgmu.org" target="_blank">KGMU Lucknow</a> <br>
      <a href="https://pgimer.edu.in" target="_blank">PGIMER Chandigarh</a> <br>
      <a href="https://manipal.edu" target="_blank">Manipal University</a> <br>
      <a href="https://www.bhu.ac.in" target="_blank">BHU Medical College</a> <br>
      <a href="https://www.srmist.edu.in" target="_blank">SRM Medical College</a> <br>
      <a href="https://www.amrita.edu" target="_blank">Amrita Institute</a> <br>
      <a href="https://www.gims.ac.in" target="_blank">Government Institute of Medical Sciences, Greater Noida</a> <br>
      <a href="https://subharti.org" target="_blank">Subharti Medical College, Meerut</a> <br>
      <a href="https://www.sharda.ac.in" target="_blank">Sharda Medical College</a> <br>
      <a href="https://www.amity.edu" target="_blank">Amity Medical Programs</a> <br><br>

    `;
}
else if(input.includes("law college")) {
    result.innerHTML = `
    <h3>⚖ Top Law Colleges (India)</h3>

      <a href="https://www.nls.ac.in" target="_blank">NLSIU Bangalore</a> <br>
      <a href="https://www.nalsar.ac.in" target="_blank">NALSAR Hyderabad</a><br>
      <a href="https://www.nludelhi.ac.in" target="_blank">NLU Delhi</a><br>
      <a href="https://www.symlaw.ac.in" target="_blank">Symbiosis Law School</a> <br>
      <a href="https://jgu.edu.in" target="_blank">Jindal Global Law School</a> <br>
      <a href="https://law.du.ac.in" target="_blank">Faculty of Law, DU</a> <br>
      <a href="https://www.gnlu.ac.in" target="_blank">GNLU Gujarat</a> <br>
      <a href="https://christuniversity.in" target="_blank">Christ University</a> <br>
      <a href="https://www.amity.edu" target="_blank">Amity Law School</a> <br>
      <a href="https://ilslaw.edu" target="_blank">ILS Law College</a><br>
      <a href="https://www.ccsuniversity.ac.in" target="_blank">CCS University (Law)</a> <br><br>
      <a href="https://www.sharda.ac.in" target="_blank">Sharda University (Law)</a> <br>
      <a href="https://www.galgotiasuniversity.edu.in" target="_blank">Galgotias Law School</a><br>
      <a href="https://www.hierank.org" target="_blank">Hierank School of Law</a> <br>
    
    `;
}

else if(input.includes("arduino") || input.includes("project")) {
    result.innerHTML = `
    <h3>🤖 Arduino / College Project Roadmap</h3>

    🔹 Step 1: Arduino basics samjho (UNO, pins, IDE)<br>
    🔹 Step 2: Basic coding (C/C++) + logic build karo<br>
    🔹 Step 3: Sensors & modules use karna seekho<br>
    🔹 Step 4: Circuit connections + breadboard practice<br>
    🔹 Step 5: Small → Advanced projects banao<br><br>

    <h4>🔥 Project Ideas:</h4>
    👉 Smart Home Automation (Mobile control) 🏠<br>
    👉 Obstacle Avoiding Robot 🤖<br>
    👉 Automatic Street Light 💡<br>
    👉 Temperature & Humidity Monitor 🌡️<br>
    👉 Smart Irrigation System 🌱<br>
    👉 Bluetooth Controlled Car 🚗<br><br>

    <h4>🧰 Required Components:</h4>
    🔹 Arduino UNO board<br>
    🔹 Sensors (Ultrasonic, DHT11, IR)<br>
    🔹 LEDs, Resistors, Wires<br>
    🔹 Breadboard<br>
    🔹 Bluetooth Module (HC-05)<br><br>

    <h4>🎥 Learn from YouTube:</h4>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=arduino+projects" target="_blank">
        Arduino Projects
        </a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=arduino+tutorial+for+beginners" target="_blank">
        Arduino Tutorial
        </a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=arduino+robot+projects" target="_blank">
        Arduino Robot Projects
        </a>
    </div>

    <h4>🧑‍💻 Simulation Tools</h4>
    💻 <a href="https://www.tinkercad.com/" target="_blank">Tinkercad (Online Simulator)</a><br>
    ⚙️ <a href="https://wokwi.com/" target="_blank">Wokwi Arduino Simulator</a><br><br>

    <h4>📈 Project Tips (Important)</h4>
    🚀 Simple project se start karo → phir upgrade karo<br>
    📊 Project explanation strong rakho (viva ke liye)<br>
    🔌 Proper wiring check karo (common mistakes avoid)<br>
    📱 Final project me mobile/app control add karo<br><br>

    <h4>💡 Pro Tips</h4>
    🔥 Copy mat karo — samajh ke banao<br>
    🎯 Unique feature add karo (extra marks milte hain)<br>
    📹 Project ka demo video bana lo<br>
    🚀 GitHub pe upload karo (portfolio strong banega)<br><br>

    ✨ <i>Bonus: Arduino + IoT + AI = Next Level Projects 🔥💪</i>
    `;
}

else if(input.includes("model")) {
    result.innerHTML = `
    <h3>🏗 Model Making Roadmap</h3>

    🔹 Step 1: Decide karo kya banana hai (Science / Art / Working Model)<br>
    🔹 Step 2: Materials choose karo (cardboard, thermocol, colors, LEDs)<br>
    🔹 Step 3: Simple design se start karo (layout plan banao)<br>
    🔹 Step 4: Creativity + finishing add karo<br>
    🔹 Step 5: Presentation prepare karo (explain clearly)<br><br>

    <h4>🔥 Model Ideas:</h4>
    👉 Volcano Model (chemical reaction) 🌋<br>
    👉 Solar System (rotating model) ☀️<br>
    👉 Smart City with lights 🏙️<br>
    👉 Bridge Model (engineering design) 🌉<br>
    👉 Rainwater Harvesting 💧<br>
    👉 Windmill / Renewable Energy ⚡<br><br>

    <h4>🧰 Required Materials:</h4>
    ✂️ Cardboard / Thermocol<br>
    🎨 Colors, markers, glue<br>
    💡 LEDs, wires (working model ke liye)<br>
    🔋 Battery / power source<br><br>

    <h4>🎥 Learn from YouTube:</h4>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=science+model+projects" target="_blank">
        Science Model Projects
        </a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=school+project+models" target="_blank">
        School Project Ideas
        </a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=working+model+science+projects" target="_blank">
        Working Model Ideas
        </a>
    </div>

    <h4>📈 Presentation Tips (Important)</h4>
    🗣 Model explain clearly (simple language)<br>
    📊 Chart / labels add karo (professional look)<br>
    🎯 Working model banane ki koshish karo (extra marks)<br>
    💡 Unique idea = high score<br><br>

    <h4>💡 Pro Tips</h4>
    🔥 Clean finishing = best impression<br>
    🎯 Over-complex mat banao (simple + effective)<br>
    📸 Photos / video bana lo (portfolio ke liye)<br>
    🚀 Last day pe mat banao (time manage karo)<br><br>

    ✨ <i>Bonus: Working + Creative Model = Top Marks 🔥💪</i>
    `;
}

else if(input.includes("drawing")) {
    result.innerHTML = `
    <h3>🎨 Drawing Roadmap</h3>

    🔹 Basic shapes (circle, square, lines) practice karo<br>
    🔹 Pencil control + hand movement improve karo<br>
    🔹 Light → dark shading seekho<br>
    🔹 Daily sketch banao (5–10 min bhi chalega)<br>
    🔹 References dekh ke drawing improve karo<br><br>

    <h4>🎭 Drawing Types:</h4>
    👉 Sketching ✏️<br>
    👉 Portrait 👤<br>
    👉 Cartoon / Anime 😎<br>
    👉 Realistic Art 🎨<br>
    👉 Doodle Art 🌀<br><br>

    <h4>🔥 Top Creators:</h4>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/@DrawWithJazza" target="_blank">Draw with Jazza</a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/@ArtForKidsHub" target="_blank">Art for Kids Hub</a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=realistic+drawing+tutorial" target="_blank">
        Realistic Drawing Tutorial
        </a>
    </div>

    <h4>🧰 Tools Required:</h4>
    ✏️ Pencils (HB, 2B, 6B)<br>
    📄 Sketchbook<br>
    🧽 Eraser + blending tools<br>
    🎨 Colors (optional)<br><br>

    <h4>📈 Growth Tips</h4>
    🚀 Instagram / Pinterest se ideas lo<br>
    📱 Apni drawings online post karo<br>
    🔁 Same drawing dubara banao (improvement dikhega)<br>
    🎯 Daily consistency maintain karo<br><br>

    <h4>💡 Pro Tips</h4>
    🔥 Perfect banane ke chakkar me mat rukna<br>
    🎯 Mistakes se hi improvement hoti hai<br>
    👀 Observe karo (real world se seekho)<br>
    🚀 Time ke sath automatically improve hoga<br><br>

    ✨ <i>Bonus: Drawing + Social Media = Art Page Growth 💥</i>
    `;
}

else if(input.includes("study")) {
    result.innerHTML = `
    <h3>📚 Smart Study Roadmap</h3>

    🔹 Daily study schedule banao (fixed time)<br>
    🔹 Distractions avoid karo (mobile control)<br>
    🔹 Short notes banao (revision easy hota hai)<br>
    🔹 Daily + weekly revision karo<br>
    🔹 Practice questions solve karo<br><br>

    <h4>📖 Study Methods:</h4>
    👉 Pomodoro Technique (25 min study + 5 min break) ⏱️<br>
    👉 Active Recall (khud se yaad karo) 🧠<br>
    👉 Spaced Repetition (repeat after gap) 🔁<br><br>

    <h4>🎯 Exam Strategy:</h4>
    📊 PYQs solve karo (previous year questions)<br>
    📝 Mock tests do regularly<br>
    ⏰ Time management practice karo<br>
    🎯 Weak topics pe focus karo<br><br>

    <h4>🔥 Top Creators:</h4>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/@NextPath96" target="_blank">Next Path 96</a> (Competitive Exams)
    </div>
    
    <div class="creator">
        🎥 <a href="https://www.youtube.com/@PrashantKirad11th12th-rb7xo" target="_blank">Prashant Kirad</a> (Class 10th & 12th)
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=study+tips+for+students+india" target="_blank">
        Study Tips Videos
        </a>
    </div>

    <h4>🧰 Useful Tools</h4>
    📝 <a href="https://keep.google.com/" target="_blank">Google Keep (Notes)</a><br>
    📅 <a href="https://calendar.google.com/" target="_blank">Google Calendar (Schedule)</a><br>
    ⏱ <a href="https://pomofocus.io/" target="_blank">Pomodoro Timer</a><br><br>

    <h4>📈 Productivity Tips</h4>
    🚀 Morning study zyada effective hota hai<br>
    📱 Social media limit karo<br>
    🎧 Focus music use karo<br>
    🔁 Consistency maintain karo<br><br>

    <h4>💡 Pro Tips</h4>
    🔥 Smart study > Hard study<br>
    🎯 Quality matters, not hours<br>
    😴 Proper sleep lo (important)<br>
    🚀 Daily thoda improvement karo<br><br>

    ✨ <i>Bonus: Discipline + Consistency = Topper mindset 🧠💪</i>
    `;
}

else if(input.includes("interview")) {
    result.innerHTML = `
    <h3>🧑‍💼 Interview Preparation Guide</h3>

    🔹 Step 1: Resume strong banao (projects + skills clear ho)<br>
    🔹 Step 2: Common questions practice karo<br>
    🔹 Step 3: Communication + confidence improve karo<br>
    🔹 Step 4: Company research karo (important)<br>
    🔹 Step 5: Mock interviews do<br><br>

    <h4>🎯 Common Interview Questions:</h4>
    👉 Tell me about yourself<br>
    👉 Why should we hire you?<br>
    👉 Your strengths & weaknesses<br>
    👉 Projects explain karo<br><br>

    <h4>💻 Technical Interview Tips:</h4>
    🔹 Basics clear rakho (core subjects / coding)<br>
    🔹 Apne projects detail me explain karo<br>
    🔹 Problem solving approach dikhao<br><br>

    <h4>🗣 HR Interview Tips:</h4>
    🔹 Confidence + eye contact maintain karo<br>
    🔹 Honest answers do (fake mat bolo)<br>
    🔹 Positive attitude rakho<br><br>

    <h4>🔥 Top YouTube Channels:</h4>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/@ApnaCollegeOfficial" target="_blank">Apna College</a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/@AmanDhattarwal" target="_blank">Aman Dhattarwal</a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/@SimplilearnOfficial" target="_blank">Simplilearn</a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=mock+interview+practice" target="_blank">
        Mock Interview Practice
        </a>
    </div>

    <h4>🧰 Useful Tools</h4>
    📄 <a href="https://www.canva.com/resumes/" target="_blank">Resume Builder</a><br>
    💼 <a href="https://www.linkedin.com/" target="_blank">LinkedIn Profile</a><br>
    🎯 <a href="https://www.interviewbit.com/" target="_blank">InterviewBit (Coding Practice)</a><br><br>

    <h4>📈 Selection Strategy</h4>
    🚀 Daily practice + mock interviews<br>
    📊 Weak areas identify karke improve karo<br>
    🤝 Networking karo (referrals milte hain)<br>
    🔁 Rejection se seekho, give up mat karo<br><br>

    <h4>💡 Pro Tips</h4>
    🔥 First impression matters (dress + body language)<br>
    🎯 Short & clear answers do<br>
    😎 Nervous ho to slow bolna start karo<br>
    🚀 Confidence + preparation = selection<br><br>

    ✨ <i>Bonus: Skills + Confidence + Projects = Job Confirm 💪🔥</i>
    `;
}


else if(input.includes("english")) {
    result.innerHTML = `
    <h3>🗣 English Learning Roadmap</h3>

    🔹 Step 1: Daily 10 new words yaad karo<br>
    🔹 Step 2: English me sochna start karo<br>
    🔹 Step 3: Movies/YouTube English me dekho<br>
    🔹 Step 4: Daily speaking practice karo<br><br>

    <h4>🔥 Best Channels:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/@BBCLearningEnglish" target="_blank">BBC Learning English</a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/@LearnEnglishWithTVSeries" target="_blank">Learn English with TV Series</a>
    </div>

    <h4>📱 Best Apps:</h4>

    <div class="creator">
        <a href="https://play.google.com/store/apps/details?id=com.duolingo" target="_blank">Duolingo</a>
    </div>

    <div class="creator">
        <a href="https://play.google.com/store/apps/details?id=com.helloenglish" target="_blank">Hello English</a>
    </div>
    `;
}

else if(
    input.includes("videoediting") || 
    input.includes("editing") || 
    input.includes("filmmaking") || 
    input.includes("freelancing") ||
    input.includes("film")
) {
    result.innerHTML = `
    <h3>🎬 Filmmaker Roadmap (Editing + Freelancing + Content Creation)</h3>

    <h4>🚀 Step by Step Journey</h4>
    🔹 Step 1: Basic video editing seekho (cut, trim, music)<br>
    🔹 Step 2: Reels / Shorts edit karo<br>
    🔹 Step 3: Transitions + effects + color grading seekho<br>
    🔹 Step 4: Filmmaking basics (camera, lighting, story)<br>
    🔹 Step 5: Portfolio banao (best 5 projects)<br>
    🔹 Step 6: Freelancing start karo (clients lo)<br><br>

    <h4>🎞 Skills You Need</h4>
    👉 Video Editing 🎬<br>
    👉 Storytelling 📖<br>
    👉 Camera Handling 📸<br>
    👉 Sound & Music 🎧<br>
    👉 Creativity + Consistency 🔥<br><br>

    <h4>🎬 Filmmaking Basics</h4>
    🔹 Script writing (story plan)<br>
    🔹 Camera shots (wide, close-up, slow motion)<br>
    🔹 Lighting setup (natural + artificial)<br>
    🔹 Sound quality important hai<br><br>

    <h4>🧰 Best Tools</h4>

    <div class="creator">
        ✂️ <a href="https://www.capcut.com/" target="_blank">CapCut</a> (Beginner)
    </div>

    <div class="creator">
        🎬 <a href="https://www.adobe.com/products/premiere.html" target="_blank">Premiere Pro</a> (Pro Editing)
    </div>

    <div class="creator">
        🎨 <a href="https://www.canva.com/" target="_blank">Canva</a> (Thumbnail)
    </div>

    <div class="creator">
        🎥 <a href="https://www.blackmagicdesign.com/products/davinciresolve" target="_blank">DaVinci Resolve</a> (Cinematic)
    </div>

    <h4>💰 Earning Options</h4>
    💵 Freelancing (Fiverr / Upwork)<br>
    💵 Reels editing for creators<br>
    💵 Wedding / event shooting<br>
    💵 YouTube channel<br>
    💵 Brand collaborations<br><br>

    <h4>🌐 Freelance Platforms</h4>

    <div class="creator">
        💼 <a href="https://www.fiverr.com/" target="_blank">Fiverr</a>
    </div>

    <div class="creator">
        💼 <a href="https://www.upwork.com/" target="_blank">Upwork</a>
    </div>

    <div class="creator">
        💼 <a href="https://www.freelancer.com/" target="_blank">Freelancer</a>
    </div>

    <h4>🔥 Top Creators</h4>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/@GFXMentor" target="_blank">GFX Mentor</a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/@PremiereBasics" target="_blank">Premiere Basics</a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/@PeterMcKinnon" target="_blank">Peter McKinnon</a>
    </div>

    <h4>📈 Growth Strategy</h4>
    🚀 Daily 1 edit karo<br>
    📱 Instagram + YouTube pe upload karo<br>
    🔥 Trending effects use karo<br>
    🎯 Before/After edits dikhao<br>
    📊 Portfolio strong rakho<br><br>

    <h4>🏆 7 Days Challenge</h4>
    Day 1 → 1 reel edit karo<br>
    Day 2 → transition seekho<br>
    Day 3 → color grading karo<br>
    Day 4 → short vlog edit karo<br>
    Day 5 → thumbnail banao<br>
    Day 6 → mini film banao<br>
    Day 7 → upload everywhere 🚀<br><br>

    <h4>💡 Pro Tips</h4>
    🔥 Consistency = Growth<br>
    💬 Clients se politely baat karo<br>
    🎯 Unique editing style banao<br>
    🚀 Skill + Portfolio = Paisa 💰<br><br>

    ✨ <i>Bonus: Filmmaker = Creative + High Income Skill 🔥💪</i>
    `;
}

else if(input.includes("teaching") || input.includes("teacher")) {
    result.innerHTML = `
    <h3>👨‍🏫 Teaching Career Roadmap</h3>

    <h4>🚀 Step by Step Journey</h4>
    🔹 Step 1: Apna subject strong karo 📚<br>
    🔹 Step 2: Communication skills improve karo 🗣<br>
    🔹 Step 3: Notes + teaching style develop karo<br>
    🔹 Step 4: Students ko simple way me samjhana seekho<br>
    🔹 Step 5: Online + offline dono try karo<br><br>

    <h4>🎯 Teaching Types</h4>
    👉 School Teaching 🏫<br>
    👉 Coaching Classes 📖<br>
    👉 Online Teaching 💻<br>
    👉 YouTube Teaching 🎥<br>
    👉 Home Tuition 🏠<br><br>

    <h4>💻 Online Teaching Platforms</h4>

    <div class="creator">
        🌐 <a href="https://unacademy.com/" target="_blank">Unacademy</a>
    </div>

    <div class="creator">
        🌐 <a href="https://byjus.com/" target="_blank">BYJU'S</a>
    </div>

    <div class="creator">
        🌐 <a href="https://www.udemy.com/" target="_blank">Udemy</a>
    </div>

    <h4>🎥 Learn from YouTube:</h4>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=teaching+skills+improve" target="_blank">
        Teaching Skills Videos
        </a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=how+to+teach+students+effectively" target="_blank">
        Effective Teaching Methods
        </a>
    </div>

    <h4>💰 Earning Options</h4>
    💵 Home tuition<br>
    💵 Online classes<br>
    💵 YouTube monetization<br>
    💵 Paid courses (Udemy)<br>
    💵 Coaching institute job<br><br>

    <h4>📈 Growth Strategy</h4>
    🚀 Daily teaching practice karo<br>
    📱 YouTube / Instagram pe videos daalo<br>
    🎯 Unique teaching style banao<br>
    💬 Students ke doubts clear karo<br><br>

    <h4>💡 Pro Tips</h4>
    🔥 Simple language use karo (easy samajh aaye)<br>
    🎯 Real-life examples do<br>
    😎 Confidence + energy maintain rakho<br>
    🚀 Consistency = successful teacher<br><br>

    ✨ <i>Bonus: Teaching + YouTube = Fame + Income 💰🔥</i>
    `;
}

else if(input.includes("finance") || input.includes("stock") || input.includes("share") || input.includes("market") || input.includes("trading")) {
    result.innerHTML = `
    <h3>📈 Finance, Share Market & Trading </h3>

    ⚠️ Risk hai — pehle knowledge lo, direct paisa mat lagao<br><br>
     🔹 Stock market basics samjho 📊<br>
     🔹 Chart reading (candlestick) seekho 📉<br>
     🔹 Demo account use karo 💻<br>
     🔹 Risk management seekho ⚠️<br>
     🔹 Trading psychology samjho 🧠<br>
     🔹 Support & Resistance seekho 📍<br>
     🔹 Technical indicators (RSI, MACD) samjho 📊<br>
     🔹 News aur market trends follow karo 📰<br>
     🔹 Proper strategy banao (random trade mat lo) 🎯<br>
     🔹 Trading journal maintain karo 📒<br><br>

    <h4>🔥 Best Platforms:</h4>

    <div class="creator">
        <a href="https://zerodha.com/" target="_blank">
        Zerodha (Trading Platform)
        </a>
    </div>

    <div class="creator">
        <a href="https://groww.in/" target="_blank">
        Groww (Easy Investing)
        </a>
    </div>

    <br>

    <h4>🎥 Learn from YouTube:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/@TradingChanakya" target="_blank">Trading Chanakya</a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/@PushkarRajThakurOfficial" target="_blank">Pushkar Raj Thakur Official</a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=stock+market+for+beginners+india" target="_blank">
        Share Market Basics
        </a>
    </div>

    <br><br>

    💡 <h4>📍 Offline Learning</h4>
    👉 Local trading classes search karo<br>
    👉 Ya online courses join karo<br><br>


    <br>
    💡 Tip: Knowledge + patience = profit 💰
    `;
}

else if(input.includes("fun") || input.includes("timepass")) {
    result.innerHTML = `
    <h3>😂 Fun Learning Mode</h3>

    🔹 Kaam kam, masti zyada 😎<br>
    🔹 Life ko enjoy karo<br><br>

    <h4>🔥 Funny Ideas:</h4>
    👉 Dost ko prank kaise kare 🤣<br>
    👉 Lazy day kaise spend kare 🛌<br>
    👉 1 din bina phone ke survive karo 📵<br><br>

    💡 Tip: Thodi masti bhi zaroori hai 😜
    `;
}
else if(input.includes("office") || input.includes("ppt") || input.includes("ms")) {
    result.innerHTML = `
    <h3>📄 Office Tools Mastery (Word, Excel, PPT)</h3>

    <h4>🚀 Step by Step Learning</h4>
    🔹 MS Word (documents, resume)<br>
    🔹 Excel (data, formulas, charts)<br>
    🔹 PowerPoint (presentations)<br><br>

    <h4>💻 Best Online Tools</h4>

    <div class="creator">
        🌐 <a href="https://www.office.com/" target="_blank">Microsoft Office Online</a>
    </div>

    <div class="creator">
        ⚡ <a href="https://www.wps.com/office/" target="_blank">WPS Office</a>
    </div>

    <div class="creator">
        🎨 <a href="https://www.canva.com/presentations/" target="_blank">Canva PPT Maker</a>
    </div>

    <div class="creator">
        📊 <a href="https://docs.google.com/" target="_blank">Google Docs / Slides</a>
    </div>

    <h4>🎤 PPT Kaise Banaye (Step-by-Step)</h4>
    🔹 Step 1: Topic choose karo (clear idea hona chahiye)<br>
    🔹 Step 2: Title slide banao (title + name)<br>
    🔹 Step 3: Har slide me 1 main point likho<br>
    🔹 Step 4: Images + icons add karo (attractive banega)<br>
    🔹 Step 5: Zyada text mat likho (short points use karo)<br>
    🔹 Step 6: Last slide me conclusion ya thank you likho<br><br>

    <h4>🎨 PPT Design Tips</h4>
    🎯 Light background + dark text use karo<br>
    🎯 Same font style rakho (clean look)<br>
    🎯 Animations simple rakho (over mat karo)<br>
    🎯 Charts / images use karo (samajhna easy hota hai)<br><br>

    <h4>💼 Where It Is Used</h4>
    💻 Office presentations<br>
    🎓 School/college projects<br>
    📊 Business meetings<br><br>

    <h4>💡 Pro Tips</h4>
    🔥 Practice karke presentation do (confidence important)<br>
    🎤 Slides ko read mat karo — explain karo<br>
    🚀 Simple PPT = best PPT<br><br>

    ✨ <i>Bonus: PPT + Confidence = Presentation King 👑🔥</i>
    `;
}
else if(input.includes("photography") || input.includes("photographer") || input.includes("photo")) {
    result.innerHTML = `
    <h3>📸 Photographer Roadmap</h3>

    <h4>🚀 Step by Step Journey</h4>
    🔹 Step 1: Camera basics samjho (ISO, shutter, aperture)<br>
    🔹 Step 2: Mobile ya DSLR se practice karo<br>
    🔹 Step 3: Lighting aur angles samjho<br>
    🔹 Step 4: Editing seekho (color, contrast, filters)<br>
    🔹 Step 5: Portfolio banao (best photos select karo)<br><br>

    <h4>📷 Photography Types</h4>
    👉 Portrait 👤<br>
    👉 Nature 🌿<br>
    👉 Street 🚶<br>
    👉 Wedding 💍<br>
    👉 Product 📦<br>
    👉 Cinematic Shots 🎬<br><br>

    <h4>🧰 Tools & Apps</h4>

    <div class="creator">
        📱 <a href="https://www.adobe.com/products/lightroom.html" target="_blank">Adobe Lightroom</a> (Editing)
    </div>

    <div class="creator">
        📷 <a href="https://www.snapseed.online/" target="_blank">Snapseed</a> (Mobile editing)
    </div>

    <div class="creator">
        🎨 <a href="https://www.canva.com/" target="_blank">Canva</a> (Design + thumbnails)
    </div>

    <h4>🎥 Learn from YouTube:</h4>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=photography+tutorial+for+beginners" target="_blank">
        Photography Tutorials
        </a>
    </div>

    <div class="creator">
        🎥 <a href="https://www.youtube.com/results?search_query=mobile+photography+tips" target="_blank">
        Mobile Photography Tips
        </a>
    </div>

    <h4>💰 Earning Options</h4>
    💵 Wedding photography<br>
    💵 Freelancing shoots<br>
    💵 Instagram page + brand deals<br>
    💵 Stock photo selling<br>
    💵 Event photography<br><br>

    <h4>📈 Growth Strategy</h4>
    📱 Instagram pe daily post karo<br>
    🔥 Reels + before/after edits dikhao<br>
    🎯 Niche choose karo (wedding / street etc.)<br>
    🤝 Clients ke sath network build karo<br><br>

    <h4>💡 Pro Tips</h4>
    🔥 Lighting sabse important hai<br>
    🎯 Composition rule follow karo (rule of thirds)<br>
    📸 Practice = perfect shots<br>
    🚀 Editing se photo next level jati hai<br><br>

    ✨ <i>Bonus: Photography + Editing = High Income Skill 💰🔥</i>
    `;
}
else if(input.includes("bored")) {
    result.innerHTML = `
    <h3>😴 Bored Ho?</h3>

    👉 Ek funny reel dekh lo 😂<br>
    👉 Dost ko call karo 📞<br>
    👉 Kuch naya try karo 😎<br><br>

    💡 Tip: Boredom = creativity ka chance 💡
    `;
}


    else {
    result.innerHTML = `
    <h3>✨ Learn Anything</h3>
    🔹 Kuch Search tho kr lo<br>
    
    
    `;
}
}

/* Dark mode */
function darkMode() {
    document.body.style.background = "black";
}


function share() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link Copied ✅ Share with friends!");
}

window.onload = function() {
    document.getElementById("loader").style.display = "none";
}

window.onload = function() {
    setTimeout(function() {
        let loader = document.getElementById("loader");
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000); // fade out ke baad remove
    }, 2000); // 👈 2 sec delay
}

let dots = document.getElementById("dots");
let count = 0;

setInterval(() => {
    count++;
    if(count > 3) count = 0;

    dots.innerHTML = ".".repeat(count);
}, 500);
