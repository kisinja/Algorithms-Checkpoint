const date = new Date();

const addZero = (num) => {
    return num < 10 ? `0${num}` : num;
};

const formatDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} - ${month}/${day}/${year}`;
};

console.log(formatDate());