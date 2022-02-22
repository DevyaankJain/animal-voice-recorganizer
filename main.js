function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_tBI6lbkp/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
if (error)
{
console.error(error);
}
else{
    console.log(results);
    r_random_number = Math.floor(Math.random() * 255) + 1;
    b_random_number = Math.floor(Math.random() * 255) + 1;
    g_random_number = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+r_random_number+", "+b_random_number+", "+g_random_number+")";
    document.getElementById("result_confidence").style.color = "rgb("+r_random_number+", "+b_random_number+", "+g_random_number+")";

    img = document.getElementById('bark')
    img1 = document.getElementById('meow')
    img2 = document.getElementById('listen')

    if (results[0].label == "barking")
    {
        img.src = 'bark.gif';
 
    }
    else if (results[0].label == "meowing")
    {
        img1.src = 'meow.gif';

    }
    else
    {
        img3.src = 'listen.gif';
    }
}
}