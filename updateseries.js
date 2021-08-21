let form=document.querySelector('#updateseriesform');
let url='https://bluecollarsclientwork.000webhostapp.com/seriesbrowser/updateseries.php';
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let Name = document.querySelector('#name').value;
    let Genre= document.querySelector('#genre').value;
    let Director = document.querySelector('#director').value;
    let Yor= document.querySelector('#yor').value;
    let Yoe= document.querySelector('#yoe').value;
    let Status= document.querySelector('#status').value;

    

    let data ={
        "name":Name,
        "genre":Genre,
        "director":Director,
        "yor":Yor,
        "yoe":Yoe,
        "status":Status,
    };

    
    //let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log('series updated');
        }
        else
        {
            console.log('error occured');

        }


    }
    xhr.send(data); 
});