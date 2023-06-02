// const FormatDate=(FormatDate)=>{
//     if(!FormatDate) return ''
//     const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
//     const date = new Date(FormatDate);
//     let hrs = date.getHours();
//     let AmPm = hrs>12?'PM':'AM';
//     hrs = hrs?hrs:'12';
//     hrs = hrs>12?(hrs=24-hrs):hrs;

//     let min = date.getMinutes();
//     min = min<10?'0'+min:min;
//     let day = date.getDate();
//     let month = months[date.getMonth()]

//     return (
//         <>
//         `${hrs}:${min} ${AmPm} ${day} ${month}`
//         </>
//         )
        
// }
// export default FormatDate