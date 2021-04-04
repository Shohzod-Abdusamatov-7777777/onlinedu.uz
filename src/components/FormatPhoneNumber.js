
const FormatPhoneNumber = (phoneNumber, setPhoneNumber) => {
    let num = phoneNumber.replace(/\D/g, "");
    setPhoneNumber(
        num.length <= 3
            ? "+998"
            : num.length > 3 && num.length <= 5
            ? "+" + num.substring(0, 3) + " (" + num.substring(3, 5)
            : num.length > 5 && num.length <= 8
            ? "+" + num.substring(0, 3) + " (" + num.substring(3, 5) + ") " + num.substring(5, 8)
            : num.length > 8 && num.length <= 10
            ? "+" + num.substring(0, 3) + " (" + num.substring(3, 5) + ") " + num.substring(5, 8) + "-" + num.substring(8, 10)
            : "+" +
              num.substring(0, 3) +
              " (" +
              num.substring(3, 5) +
              ") " +
              num.substring(5, 8) +
              "-" +
              num.substring(8, 10) +
              "-" +
              num.substring(10, 12)
    );
};

export default FormatPhoneNumber;
