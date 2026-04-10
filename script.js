function generate() {
    let input = document.getElementById("input").value.toLowerCase();
    let result = document.getElementById("result");
    
    if(input.includes("coding")) {
    result.innerHTML = `
    <h3>💻 Coding Roadmap</h3>

    🔹 Start with HTML, CSS, JavaScript<br>
    🔹 Practice projects banao<br><br>

    <h4>🔥 Top YouTube Creators:</h4>

    <div class="creator">

        <a href="https://www.youtube.com/@CodeWithHarry" target="_blank">CodeWithHarry</a>
    </div>    

     <div class="creator">

       <a href="https://www.youtube.com/@ApnaCollegeOfficial" target="_blank">Apna College</a>
    </div>   

     <div class="creator">

       <a href="https://www.youtube.com/@freecodecamp" target="_blank">freeCodeCamp</a>
    </div>
    
    <h4>🏫 Offline Training (Recommended)</h4>
    
    👉 <b>Technical Future Computer Academy Bijnor</b><br>
    ✔ Practical training<br>
    ✔ Beginner to advanced<br>
    ✔ Personal guidance<br><br>

    
    <br><br>
    💡 Tip: Online + Offline dono combine karo 🚀
    🚀 Daily 1 hour practice karo
    `;

    
}
    else if(input.includes("youtube")) {
    result.innerHTML = `
    <h3>🎥 YouTube Creator Roadmap</h3>

    🔹 Step 1: Niche choose karo (roasting, gaming, tech, vlog, comedy,)<br>
    🔹 Step 2: Consistent videos upload karo<br>
    🔹 Step 3: Thumbnail + editing seekho<br>
    🔹 Step 4: Audience engage karo<br><br>

    <h4>🔥 Top YouTube Creators:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/@CarryMinati" target="_blank">CarryMinati</a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/@TechBurner" target="_blank">Tech Burner</a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/@Anshulvermavine8055" target="_blank">Anshul verma vines</a>
    </div>
    
<div class="creator">
        <a href="https://www.youtube.com/@BBKiVines" target="_blank">BB Ki Vines</a>
    </div>
    
    <div class="creator">
        <a href="https://www.youtube.com/@GamerFleet" target="_blank">Gamer Fleet</a>
    </div>
    
    <div class="creator">
        <a href="https://www.youtube.com/@ElvishYadavVlogs" target="_blank">Elvish Yadav Vlogs</a>
    </div>



    <br><br>
    🚀 Tip: Daily ek video banaoge to growth fast hogi
    `;
}

else if(input.includes("job") || input.includes("internship")) {
    result.innerHTML = `
    <h3>💼 Jobs & Internships</h3>

    <h4>🔥 Top Job Platforms:</h4>

    <div class="creator">
        <a href="https://www.naukri.com" target="_blank">Naukri.com</a>
    </div>

    <div class="creator">
        <a href="https://www.indeed.com" target="_blank">Indeed</a>
    </div>

    <div class="creator">
        <a href="https://internshala.com" target="_blank">Internshala (Internships)</a>
    </div>

    <div class="creator">
        <a href="https://www.linkedin.com/jobs" target="_blank">LinkedIn Jobs</a>
    </div>

    <br><br>

    <h4>💡 Tips:</h4>
    👉 Resume strong banao 📄<br>
    👉 Daily apply karo 🔁<br>
    👉 Skills improve karo 💻<br><br>

    💥 Tip: Consistency = Job 🚀
    `;
}
else if(input.includes("dance") || input.includes("dancing")) {
    result.innerHTML = `
    <h3>💃 Dancing सीखो</h3>

    🔹 Step 1: Basic steps se start karo<br>
    🔹 Step 2: Daily practice karo<br>
    🔹 Step 3: Music ke sath rhythm pakdo<br><br>

    <h4>🔥 Dance Styles:</h4>
    👉 Hip Hop 🕺<br>
    👉 Bollywood 💃<br>
    👉 Freestyle 😎<br><br>

    <h4>🎥 Learn from YouTube:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=dance+for+beginners" target="_blank">
        Dance for Beginners
        </a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=bollywood+dance+tutorial" target="_blank">
        Bollywood Dance Tutorial
        </a>
    </div>

    <br><br>

    💡 Tip: Confidence + practice = perfect dance 💥
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

    🔹 Daily riyaaz karo<br>
    🔹 Sur aur scale samjho<br>
    🔹 Songs practice karo<br>
    🔹 Voice control improve karo<br><br>

    <h4>🔥 Top Creators:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/@SingingSimplified" target="_blank">Singing Simplified</a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/@siddharthslathiaofficial" target="_blank">siddhart lathia official</a>
    </div>

    <br><br>
    💡 Tip: Daily practice = perfect voice 🎶
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

else if(
    input.includes("job") || 
    input.includes("jobs") || 
    input.includes("naukri") || 
    input.includes("work") || 
    input.includes("internship")
) {
    result.innerHTML = `
    <h3>💼 Find Jobs</h3>

    👉 Choose platform below:<br><br>

    <a href="https://www.naukri.com/" target="_blank">
        <button>🔎 Naukri Jobs</button>
    </a><br><br>

    <a href="https://www.indeed.com/" target="_blank">
        <button>🔎 Indeed Jobs</button>
    </a><br><br>

    <a href="https://www.linkedin.com/jobs/" target="_blank">
        <button>🔎 LinkedIn Jobs</button>
    </a><br><br>

    <a href="https://internshala.com/" target="_blank">
        <button>🎓 Internships</button>
    </a><br><br>

    💡 Tip: Daily check karo for best opportunities 🚀
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

    🔹 Step 1: Arduino basics samjho (UNO board)<br>
    🔹 Step 2: Basic coding (C/C++) seekho<br>
    🔹 Step 3: Sensors use karna seekho<br>
    🔹 Step 4: Small projects se start karo<br><br>

    <h4>🔥 Project Ideas:</h4>
    👉 Smart Home Automation 🏠<br>
    👉 Obstacle Avoiding Robot 🤖<br>
    👉 Automatic Street Light 💡<br>
    👉 Temperature Sensor 🌡️<br><br>

    <h4>🎥 Learn from YouTube:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=arduino+projects" target="_blank">
        Arduino Projects
        </a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=arduino+tutorial+for+beginners" target="_blank">
        Arduino Tutorial
        </a>
    </div>

    <br><br>

    <h4>🏫 Offline Help</h4>
    👉 Technical Future Computer Academy<br>
    ✔ Project guidance available<br>
    ✔ Practical training<br><br>

    💡 Tip: Simple project se start karo phir upgrade karo 🚀
    `;
}
else if(input.includes("model")) {
    result.innerHTML = `
    <h3>🏗 Model Making Roadmap</h3>

    🔹 Step 1: Decide karo kya banana hai (science / art model)<br>
    🔹 Step 2: Basic materials use karo (cardboard, glue, colors)<br>
    🔹 Step 3: Simple design se start karo<br>
    🔹 Step 4: Creativity add karo<br><br>

    <h4>🔥 Ideas for Models:</h4>
    👉 Volcano model 🌋<br>
    👉 Solar system ☀️<br>
    👉 Smart city 🏙️<br>
    👉 Bridge model 🌉<br><br>

    <h4>🎥 Learn from YouTube:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=science+model+projects" target="_blank">
        Science Model Projects
        </a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=school+project+models" target="_blank">
        School Project Ideas
        </a>
    </div>

    <br><br>
    💡 Tip: Simple se start karo, phir advanced banao 🚀
    `;
}
else if(input.includes("drawing")) {
    result.innerHTML = `
    <h3>🎨 Drawing Roadmap</h3>

    🔹 Basic shapes practice karo<br>
    🔹 Pencil control improve karo<br>
    🔹 Daily sketch banao<br>
    🔹 Creativity develop karo<br><br>

    <h4>🔥 Top Creators:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/@DrawWithJazza" target="_blank">Draw with Jazza</a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/@ArtForKidsHub" target="_blank">Art for Kids Hub</a>
    </div>

    <br><br>
    💡 Tip: Practice makes perfect ✏️
    `;
}
else if(input.includes("music")) {
    result.innerHTML = `
    <h3>🎸 Music Learning</h3>

    🔹 Instrument choose karo<br>
    🔹 Basic notes seekho<br>
    🔹 Practice daily<br>
    🔹 Songs play karo<br><br>

    <h4>🔥 Top Creators:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/@JustinGuitar" target="_blank">Justin Guitar</a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/@Official_ArijitSingh" target="_blank">Official Arjit Singh</a>
    </div>

    <br><br>
    💡 Tip: Practice daily 🎶
    `;
}
else if(input.includes("study")) {
    result.innerHTML = `
    <h3>📚 Study Tips</h3>

    🔹 Daily schedule banao<br>
    🔹 Distraction avoid karo<br>
    🔹 Notes banao<br>
    🔹 Revision karo<br><br>

    <h4>🔥 Top Creators:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/@NextPath96" target="_blank">Next Path 96</a>
    </div> for Competititive Exams.
    
     <div class="creator">
        <a href="https://www.youtube.com/@PrashantKirad11th12th-rb7xo" target="_blank">Prashant kirad</a>
    </div> for 10th and 12th Exam.

    <br><br>
    💡 Tip: Smart study karo 🧠
    `;
}
else if(input.includes("interview")) {
    result.innerHTML = `
    <h3>🧑‍💼 Interview Preparation</h3>

    🔹 Step 1: Common questions practice karo<br>
    🔹 Step 2: Confidence build karo<br>
    🔹 Step 3: Resume strong banao<br>
    🔹 Step 4: Communication skills improve karo<br><br>

    <h4>🔥 Top YouTube Channels:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/@ApnaCollegeOfficial" target="_blank">Apna College</a>
    </div>
    
      <div class="creator">
        <a href="https://www.youtube.com/@AmanDhattarwal" target="_blank">Aman Dhattarwal</a>
    </div>
    
    <div class="creator">
        <a href="https://www.youtube.com/@AnkurWarikoo" target="_blank">Ankur Warikoo</a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/@SimplilearnOfficial" target="_blank">Simplilearn</a>
    </div>

    <br><br>
    💡 Tip: Practice + confidence = job 🚀
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
else if(input.includes("lkg") || input.includes("ukg") || input.includes("kids")) {
    result.innerHTML = `
    <h3>👶 Kids Learning</h3>

    🔤 ABCD Learning<br>
    🔢 Numbers (1-100)<br>
    🎨 Drawing Practice<br>
    🎵 Rhymes & Songs<br><br>

    <h4>🎥 Learn from Videos:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=kids+learning+videos" target="_blank">
        Kids Learning Videos
        </a>
    </div>

    <br><br>
    💡 Tip: Fun + learning = best for kids 🎉
    `;
}
else if(input.includes("class 1") || input.includes("class 2") || input.includes("class 3") || input.includes("class 4") || input.includes("class 5")) {
    result.innerHTML = `
    <h3>📚 Primary Classes (1–5)</h3>

    🔹 Basic Math ➕➖<br>
    🔹 English Reading 📖<br>
    🔹 EVS 🌍<br><br>

    <h4>🎥 YouTube Channels:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=class+1+to+5+learning" target="_blank">
        Learning Videos
        </a>
    </div>

    <br><br>
    💡 Tip: Daily thoda study karo 📚
    `;
}
else if(input.includes("class 6") || input.includes("class 7") || input.includes("class 8") || input.includes("class 9")) {
    result.innerHTML = `
    <h3>📘 Middle School (6–9)</h3>

    🔹 Science 🧪<br>
    🔹 Math 📊<br>
    🔹 English 🗣<br>
    🔹 Social Studies 🌏<br><br>

    <h4>🔥 Top Channels:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=class+6+to+9+science+math" target="_blank">
        Study Videos
        </a>
    </div>

    <br><br>
    💡 Tip: Concept clear rakho 💯
    `;
}

else if(input.includes("fitness")) {
    result.innerHTML = `
    <h3>💪 Fitness Roadmap</h3>

    🔹 Step 1: Daily workout start karo<br>
    🔹 Step 2: Diet improve karo (protein, water)<br>
    🔹 Step 3: Consistency rakho<br>
    🔹 Step 4: Rest bhi important hai<br><br>

    <h4>🔥 Top Fitness Creators:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/@FitTuber" target="_blank">Fit Tuber</a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/@fitmuscletv4536" target="_blank">fit muscle tv</a>
    </div>

    <br><br>
    💡 Tip: Consistency is key 💯
    `;
}

else if(input.includes("videoediting")) {
    result.innerHTML = `
    <h3>🎬 Video Editing Roadmap</h3>

    🔹 Step 1: Basic editing tools seekho<br>
    🔹 Step 2: Short videos edit karo<br>
    🔹 Step 3: Effects & transitions seekho<br>
    🔹 Step 4: Practice karo daily<br><br>

    <h4>🔥 Top Creators:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/@GFXMentor" target="_blank">GFX Mentor</a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/@PremiereBasics" target="_blank">Premiere Basics</a>
    </div>

    <br><br>
    💡 Tip: Reels edit karo = fast growth 🚀
    `;
}

else if(input.includes("freelancing")) {
    result.innerHTML = `
    <h3>💻 Freelancing Roadmap</h3>

    🔹 Step 1: Ek skill choose karo (coding, editing)<br>
    🔹 Step 2: Portfolio banao<br>
    🔹 Step 3: Fiverr / Upwork join karo<br>
    🔹 Step 4: Clients se deal karna seekho<br><br>

    <h4>🔥 Top Creators:</h4>

    <div class="creator">
        <a href="https://www.youtube.com/@HarkiratSingh" target="_blank">Harkirat Singh</a>
    </div>

    <div class="creator">
        <a href="https://www.youtube.com/@AnkurWarikoo" target="_blank">Ankur Warikoo</a>
    </div>

    <br><br>
    💡 Tip: Skill + consistency = paisa 💰
    `;
}
else if(input.includes("teaching") || input.includes("teacher")) {
    result.innerHTML = `
    <h3>👨‍🏫 Teaching me Growth</h3>

    🔹 Subject strong karo 📚<br>
    🔹 Communication improve karo 🗣<br>
    🔹 Online teaching start karo 💻<br>
    🔹 YouTube pe padhana start karo 🎥<br><br>

    <h4>🎥 Learn from YouTube:</h4>
    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=teaching+skills+improve" target="_blank">
        Teaching Skills Videos
        </a>
    </div>

    <br>
    💡 Tip: Knowledge + confidence = best teacher 💯
    `;
}

else if(input.includes("business")) {
    result.innerHTML = `
    <h3>💼 Business me Growth</h3>

    🔹 Small se start karo 💡<br>
    🔹 Marketing seekho 📢<br>
    🔹 Online presence banao 🌐<br>
    🔹 Customer trust build karo 🤝<br><br>

    <h4>🎥 Learn:</h4>
    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=business+ideas+india" target="_blank">
        Business Ideas
        </a>
    </div>

    <br>
    💡 Tip: Consistency = success 🚀
    `;
}

else if(input.includes("coding") || input.includes("programming")) {
    result.innerHTML = `
    <h3>💻 Coding me Growth</h3>

    🔹 Daily practice karo ⌨️<br>
    🔹 Projects banao 🛠<br>
    🔹 GitHub use karo 🌐<br>
    🔹 Freelancing start karo 💰<br><br>

    <h4>🎥 Learn:</h4>
    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=coding+for+beginners" target="_blank">
        Coding Videos
        </a>
    </div>

    <br>
    💡 Tip: Practice = mastery 💯
    `;
}

else if(input.includes("fitness") || input.includes("gym")) {
    result.innerHTML = `
    <h3>💪 Fitness me Growth</h3>

    🔹 Daily workout karo 🏋️<br>
    🔹 Diet maintain karo 🥗<br>
    🔹 Consistency rakho 🔁<br><br>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=fitness+workout+beginner" target="_blank">
        Fitness Videos
        </a>
    </div>

    <br>
    💡 Tip: Discipline = transformation 🔥
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
else if(input.includes("video editing") || input.includes("editing")) {
    result.innerHTML = `
    <h3>🎬 Video Editing me Growth</h3>

    🔹 Basic software seekho (CapCut, Premiere Pro) 💻<br>
    🔹 Daily practice karo ✂️<br>
    🔹 Reels / YouTube edits banao 📱<br>
    🔹 Freelancing start karo 💰<br><br>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=video+editing+for+beginners" target="_blank">
        Video Editing Tutorials
        </a>
    </div>

    <br>
    💡 Tip: Practice + creativity = pro editor 🎯
    `;
}
else if(input.includes("singing") || input.includes("song")) {
    result.innerHTML = `
    <h3>🎤 Singing me Growth</h3>

    🔹 Daily riyaaz karo 🎶<br>
    🔹 Voice control improve karo 🎤<br>
    🔹 Covers record karo 📱<br>
    🔹 YouTube/Instagram pe upload karo 🚀<br><br>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=singing+lessons+for+beginners" target="_blank">
        Singing Lessons
        </a>
    </div>

    <br>
    💡 Tip: Consistency + practice = perfect voice 🎵
    `;
}
else if(input.includes("design") || input.includes("designing")) {
    result.innerHTML = `
    <h3>🎨 Designing me Growth</h3>

    🔹 Canva / Photoshop seekho 💻<br>
    🔹 Daily design practice karo 🎯<br>
    🔹 Logo / poster banao 🖼<br>
    🔹 Freelancing start karo 💰<br><br>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=graphic+design+for+beginners" target="_blank">
        Designing Tutorials
        </a>
    </div>

    <br>
    💡 Tip: Creativity = success 🔥
    `;
}
else if(input.includes("teaching") || input.includes("teacher")) {
    result.innerHTML = `
    <h3>👨‍🏫 Teaching me Growth</h3>

    🔹 Subject strong karo 📚<br>
    🔹 Communication improve karo 🗣<br>
    🔹 Online teaching start karo 💻<br>
    🔹 YouTube pe padhana start karo 🎥<br><br>

    <h4>🎥 Learn from YouTube:</h4>
    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=teaching+skills+improve" target="_blank">
        Teaching Skills Videos
        </a>
    </div>

    <br>
    💡 Tip: Knowledge + confidence = best teacher 💯
    `;
}

else if(input.includes("business")) {
    result.innerHTML = `
    <h3>💼 Business me Growth</h3>

    🔹 Small se start karo 💡<br>
    🔹 Marketing seekho 📢<br>
    🔹 Online presence banao 🌐<br>
    🔹 Customer trust build karo 🤝<br><br>

    <h4>🎥 Learn:</h4>
    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=business+ideas+india" target="_blank">
        Business Ideas
        </a>
    </div>

    <br>
    💡 Tip: Consistency = success 🚀
    `;
}

else if(input.includes("coding") || input.includes("programming")) {
    result.innerHTML = `
    <h3>💻 Coding me Growth</h3>

    🔹 Daily practice karo ⌨️<br>
    🔹 Projects banao 🛠<br>
    🔹 GitHub use karo 🌐<br>
    🔹 Freelancing start karo 💰<br><br>

    <h4>🎥 Learn:</h4>
    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=coding+for+beginners" target="_blank">
        Coding Videos
        </a>
    </div>

    <br>
    💡 Tip: Practice = mastery 💯
    `;
}

else if(input.includes("fitness") || input.includes("gym")) {
    result.innerHTML = `
    <h3>💪 Fitness me Growth</h3>

    🔹 Daily workout karo 🏋️<br>
    🔹 Diet maintain karo 🥗<br>
    🔹 Consistency rakho 🔁<br><br>

    <div class="creator">
        <a href="https://www.youtube.com/results?search_query=fitness+workout+beginner" target="_blank">
        Fitness Videos
        </a>
    </div>

    <br>
    💡 Tip: Discipline = transformation 🔥
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
    <h3>📄 Office Tools (Online)</h3>

    <div class="creator">
        <a href="https://www.office.com/" target="_blank">
        Microsoft Office Online (Word, Excel, PPT)
        </a>
    </div>

    <div class="creator">
        <a href="https://www.wps.com/office/" target="_blank">
        WPS Office Online
        </a>
    </div>
    <div class="creator">
        <a href="https://www.canva.com/presentations/" target="_blank">
        🎨 Canva PPT Maker
        </a>
    </div>

    <br><br>
    💡 MS Office = professional work 📄<br>
    💡 WPS = simple & fast ⚡<br>
    💡 Canva = stylish PPT 🎨

    <br><br>
    💡 Tip: Login karke directly use karo 🚀
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
const data = {

  engineering: {
    problems: [
      "Job nahi mil rahi",
      "Coding nahi aati",
      "Confusion hai kaunsi field choose kare",
      "Projects nahi ban pa rahe"
    ],
    solutions: [
      "Ek skill pick karo (Web Dev / AI / App Dev)",
      "Daily coding practice karo (2-3 hrs)",
      "GitHub pe projects upload karo",
      "Internships ke liye apply karo"
    ]
  },

  diploma: {
    problems: [
      "Polytechnic ke baad kya kare",
      "Direct job ya BTech confusion",
      "Skills kam hain"
    ],
    solutions: [
      "Lateral entry se BTech join karo",
      "Technical skills improve karo",
      "Apprenticeship ke liye apply karo"
    ]
  },

  iti: {
    problems: [
      "ITI ke baad job nahi mil rahi",
      "Trade me growth kaise kare",
      "Salary low hai"
    ],
    solutions: [
      "Apni trade me expert bano",
      "Govt jobs (Railway, SSC) ke liye prepare karo",
      "Private companies me experience lo"
    ]
  },

  trading: {
    problems: [
      "Loss ho raha hai",
      "Emotional trading",
      "Strategy kaam nahi kar rahi",
      "Overtrading"
    ],
    solutions: [
      "Risk management follow karo (1-2% rule)",
      "Trading journal maintain karo",
      "Backtesting karo",
      "Discipline maintain karo"
    ]
  },

  youtube: {
    problems: [
      "Views nahi aa rahe",
      "Subscribers nahi badh rahe",
      "Video viral nahi ho rahi",
      "Consistency nahi hai"
    ],
    solutions: [
      "SEO optimize karo (title + tags)",
      "Attractive thumbnail banao",
      "Trending topics pe video banao",
      "Regular upload karo"
    ]
  },

  freelancing: {
    problems: [
      "Clients nahi mil rahe",
      "Skill clear nahi hai",
      "Payment issues"
    ],
    solutions: [
      "Fiverr / Upwork pe profile banao",
      "Ek niche choose karo",
      "Portfolio strong banao",
      "Client communication improve karo"
    ]
  },

  business: {
    problems: [
      "Business start kaise kare",
      "Investment nahi hai",
      "Customers nahi mil rahe"
    ],
    solutions: [
      "Small scale se start karo",
      "Online marketing use karo",
      "Social media pe promote karo"
    ]
  },

  student: {
    problems: [
      "Padhai me focus nahi",
      "Time manage nahi hota",
      "Exam stress"
    ],
    solutions: [
      "Daily schedule banao",
      "Pomodoro technique use karo",
      "Revision regularly karo"
    ]
  }

};

// FIELD CHANGE EVENT
document.getElementById("field").addEventListener("change", function() {
  let value = this.value;

  if (!value || !data[value]) return;

  let problemsHTML = "<h3>Problems</h3><ul>";
  data[value].problems.forEach(p => {
    problemsHTML += `<li onclick="showSolution('${value}', '${p}')">${p}</li>`;
  });
  problemsHTML += "</ul>";

  document.getElementById("problems").innerHTML = problemsHTML;
  document.getElementById("solutions").innerHTML = "";
});

// SHOW SOLUTION
function showSolution(field, problem) {
  let solutions = data[field].solutions;

  let html = "<h3>Solutions</h3><ul>";
  solutions.forEach(s => {
    html += `<li>${s}</li>`;
  });
  html += "</ul>";

  document.getElementById("solutions").innerHTML = html;
}
