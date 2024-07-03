const getSleepHours = (day) => {
    switch (day) {
      case "saturday":
        return 8;
        break;
      case "sunday":
        return 6;
        break;
      case "monday":
        return 8;
        break;
      case "tuesday":
        return 5;
        break;
      case "wednesday":
        return 7;
        break;
      case "thursday":
        return 6;
        break;
      case "friday":
        return 9;
        break;
      default:
        return "Invalid day";
    }
  };
  
  const getActualSleepHours = () => {
    return (
      getSleepHours("monday") +
      getSleepHours("tuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday")
    );
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("perfect sleep");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(" some rest");
    } else {
      console.log(
        "You got " +
          (idealSleepHours - actualSleepHours) +
          " hour(s) less sleep than you needed this week. Get some rest."
      );
    }
  };
  calculateSleepDebt();
  