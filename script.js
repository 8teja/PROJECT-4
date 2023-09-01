
function getTime(){
    const d = new Date(); 
    document.getElementById("hour").innerHTML = addZero(format(d.getHours()));
    document.getElementById("minute").innerHTML = addZero(d.getMinutes());
    document.getElementById("seconds").innerHTML = addZero(d.getSeconds());
    if(d.getHours()>=12){
        document.getElementById("mer").innerHTML="PM";
    }
    else{
        document.getElementById("mer").innerHTML="AM";
    }
    setInterval("getTime()",1000)
    }
    getTime()
    function format(p){
        if(p>12){
            return p-12;
        }
        return p;
    }
    function addZero(i) {
        if (i < 10) {
            i="0"+i;
        }
        return i;
    }
   
    const t = new Date();
    let hours=t.getHours();
    let greet=document.getElementById("greetings");
    if(hours>=12 && hours<16){
        greet.innerHTML="GOOD AFTERNOON";
    }
    
    else if(hours>=16 && hours<17){
        greet.innerHTML="GOOD EVENING";
    }
    else if(hours>=17 && hours<22){
        greet.innerHTML="GOOD NIGHT";
    }
    
    else{
        greet.innerHTML="GOOD MORNING";
    }
    var button=document.getElementById("changetext");
    button.addEventListener("click",function(){
        let date=new Date();
        let hour=date.getHours();
        let wakeup=document.getElementById('wake');
        let lunch=document.getElementById('lunch');
        let nap=document.getElementById('nap');
        let night=document.getElementById('night');
        if(wakeup.value==hour){
            document.getElementById("messages").innerHTML="GRAB SOME BREAKFAST";
            document.getElementById("image").src="Component 30 – 1.jpg";
        }
        if(lunch.value==hour){
            document.getElementById("messages").innerHTML="LET'S HAVE SOME LUNCH !!";
            document.getElementById("image").src="lunch_image.jpg";
        }
        if(nap.value==hour){
            document.getElementById("messages").innerHTML="STOP YAWNING, GET SOME TEA..<br>ITS JUST EVENING!";
            document.getElementById("image").src="evening_image.jpg";
        }
        if(night.value==hour){
            document.getElementById("messages").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
            document.getElementById("image").src="night_image.jpg";
        }
    })
