function ChangeText(){
    document.getElementById("ChangeText").innerHTML="Party Time";
}
function ChangeTextOut(){
    document.getElementById("ChangeText").innerHTML="Set Alarm";
}
function getTime(){
    const d = new Date();
    document.getElementById("hour").innerHTML = addZero(twl(d.getHours()));
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
    function twl(p){
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
    var button=document.getElementById("ChangeText");
    button.addEventListener("click",function(){
        let date=new Date();
        let hour=date.getHours();
        let wakeup=document.getElementById('wakes');
        let lunch=document.getElementById('lunchs');
        let nap=document.getElementById('naps');
        let night=document.getElementById('nights');
        if(wakeup.value==hour){
            document.getElementById("messages").innerHTML="GRAB SOME HEALTHY BREAKFAST";
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
    