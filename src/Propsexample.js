import Props from "./Props";

function Propsexample (){

    const arr = [
        {
            question1 :" Who won the Football mens world cup 2023 ?",
            option1 :"Argentina",
            option2 :"Brazil",
            option3 :"Portugal",
            option4 :"Spain",
            answer1 :"Argentina",
        },
        {
            question1 :" Who won the Football mens world cup 2023 ?",
            option1 :"Argentina",
            option2 :"Brazil",
            option3 :"Portugal",
            option4 :"Spain",
            answer1 :"Argentina",
        },
        {
            question1 :" Who won the Football mens world cup 2023 ?",
            option1 :"Argentina",
            option2 :"Brazil",
            option3 :"Portugal",
            option4 :"Spain",
            answer1 :"Argentina",
        },
        {
            question1 :" Who won the Football mens world cup 2023 ?",
            option1 :"Argentina",
            option2 :"Brazil",
            option3 :"Portugal",
            option4 :"Spain",
            answer1 :"Argentina",
        },
        {
            question1 :" Who won the Football mens world cup 2023 ?",
            option1 :"Argentina",
            option2 :"Brazil",
            option3 :"Portugal",
            option4 :"Spain",
            answer1 :"Argentina",
        },
    ];
    return(
        <>
            {arr.map((value,index) =>
                <Props temp = {arr}/>
            )}
            
        </>
    );
}
export default  Propsexample;