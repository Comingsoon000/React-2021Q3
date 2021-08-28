import React, { useEffect, useState } from "react";
import { AppForm } from "../AppForm/AppForm";
import { Card, Cards } from "../Cards/Cards";

export const App = (): JSX.Element => {
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("");
  const [mailChecked, setMailChecked] = useState(false);
  const [femailChecked, setFemailChecked] = useState(false);
  const [country, setCountry] = useState("country");
  const [birthday, setBirthday] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Fill in all the fields");
  const [isFormValid, setIsFormValid] = useState(false);
  const [cards, setCards]: [
    Card[],
    React.Dispatch<React.SetStateAction<Card[]>>
  ] = useState([]);

  const changeHandlerName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value);
  };

  const changeHandlerGender = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (e.target.value === "male") {
      setMailChecked(e.target.checked);
      setFemailChecked(!e.target.checked);
    } else {
      setMailChecked(!e.target.checked);
      setFemailChecked(e.target.checked);
    }
    setGender(e.target.value);
  };

  const resetGender = (): void => {
    setGender("");
    setMailChecked(false);
    setFemailChecked(false);
  };

  const changeHandlerBirthday = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setBirthday(e.target.value);
  };

  const changeHandlerCountry = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setCountry(e.target.value);
  };

  const changeHandlerNotifications = (value: boolean): void => {
    setNotifications(!value);
  };

  const resetForm = () => {
    setUserName("");
    resetGender();
    setCountry("country");
    setBirthday("");
    setNotifications(false);
    setIsFormValid(false);
    setErrorMessage("All data are successfully saved");
    setTimeout(() => setErrorMessage("Fill in all the fields"), 3000);
  };

  useEffect(() => {
    if (
      notifications &&
      birthday !== "" &&
      gender !== "" &&
      userName !== "" &&
      country !== "country"
    ) {
      setIsFormValid(true);
    }
  }, [notifications, birthday, gender, userName, country]);

  const submitHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    if (notifications === false) {
      setErrorMessage("Check the notifications box");
    }
    if (birthday === "") {
      setErrorMessage("Choose your birthday");
    }
    if (country === "country") {
      setErrorMessage("Select the country");
    }
    if (gender === "") {
      setErrorMessage("Select the gender");
    }
    if (userName === "") {
      setErrorMessage("Enter your name");
    }
    if (isFormValid) {
      setCards((prevstate) => {
        const id = prevstate.length + 1;
        const newCard = { id, userName, gender, country, birthday };
        const newState = [...prevstate, newCard];
        resetForm();
        return newState;
      });
    }
  };

  return (
    <>
      <AppForm
        onChangeName={changeHandlerName}
        onChangeGender={changeHandlerGender}
        onChangeBirthday={changeHandlerBirthday}
        onChangeCountry={changeHandlerCountry}
        onChangeNotifications={changeHandlerNotifications}
        onSubmitForm={submitHandler}
        userName={userName}
        mailChecked={mailChecked}
        femailChecked={femailChecked}
        country={country}
        birthday={birthday}
        notifications={notifications}
        errorMessage={errorMessage}
      />
      <Cards cards={cards} />
    </>
  );
};
