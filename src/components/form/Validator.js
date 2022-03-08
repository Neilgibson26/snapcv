export const isValidDate = (date, tag) => {
  if (date.includes("/")) {
    let dateParts = date.split("/");
    if (dateParts.length === 2) {
      let month = parseInt(dateParts[0]);
      let year = parseInt(dateParts[1]);

      if (month <= 12 && month > 0) {
        if (year > 1000) {
          return true;
        } else {
          alert("please insert a valid year for " + tag);
          return false;
        }
      } else {
        alert("Please insert a valid month for " + tag);
        return false;
      }
    } else {
      alert(`Please insert valid ${tag} in format (MM/YYYY)`);
      return false;
    }
  } else {
    alert(`Please insert valid ${tag} in format (MM/YYYY)`);
    return false;
  }
};

export const test = () => {};
