//calaculator function
import fs from "fs";
import os from "os";

const[, ,oper,n1,n2]=process.argv;
const fs=require
function calculate (operation, num1,num2)
{
    switch (operation){
        case "mul":
            console.log(num1*num2);
            return;
            case "add":
                console.log(parseInt(num1)+parseInt(num2));
                return;
                case "sub":
                    console.log(num1-num2);
                   return;
    }
}

calculate(oper,n1,n2);
// calculate("sub",15,10);
// calculate("mul",5,10);
// const[execpath,filepath]=process.argv;
// console.log(execpath);
// console.log(filepath);
// console.log(process.argv);
fs.readFile("./dem.txt","utf-8",(err,data)=>{
    if(err){
        console.log("ERROR",err);
    }
    else{
        console.log(data);
    }
});
const content ="hey i am writted by nodejs file system";
fs.writeFile("./newfile", txt,content,(err)=>{
    if(err){
        console.log("ERROR:",err);
    }
    else{
        console.log("File writted sucessfully");
    }
});
const appendContent ="\n Hey i am the second line";
fs.appendFile("./cool.txt",appendContent,(err)=>{
    if(err){
        console.log("ERROR:",err);
    }
    else{
        console.log("File writted sucessfully");
    }
});
fs.unlink("./remove.txt",(err)=>{
    if(err){
        console.log("ERROR:",err);
    }
    else{
        console.log("File deleted sucessfully");
    }
});