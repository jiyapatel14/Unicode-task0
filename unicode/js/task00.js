input(["Black Widow 8 8 7 ", "Iron Man 9 8 10 ", "Captain America 10 10 9 "]);

function input(data){
for(i=0;i<3;i++){
let value = [];
value = data;
let arr = [];
arr[i] = value[i].split(" ");
let name = [];
name[i] = arr[i][0]+" "+arr[i][1];
let personality = [];
personality[i] = parseInt(arr[i][2]);
let strength = [];
strength[i] = parseInt(arr[i][3]);
let intelligence = [];
intelligence[i] = parseInt(arr[i][4]);
let avg = [];
avg[i] = (parseInt(arr[i][2])+parseInt(arr[i][3])+parseInt(arr[i][4]))/3
let array = [ 
    {
        Name: name[i],
        Score: {
            Personality: personality[i],
            Strength: strength[i],
            Intelligence: intelligence[i],
        },
        Average: avg[i]
    }
]
console.log(array);
}
}