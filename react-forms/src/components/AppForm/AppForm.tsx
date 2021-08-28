import React from "react";
import "./AppForm.css";

interface AppFormProps {
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeGender: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeBirthday: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCountry: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeNotifications: (value: boolean) => void;
  onSubmitForm: (e: React.FormEvent<HTMLInputElement>) => void;
  userName: string;
  mailChecked: boolean;
  femailChecked: boolean;
  country: string;
  birthday: string;
  notifications: boolean;
  errorMessage: string;
}

export const AppForm = ({
  onChangeName,
  onChangeGender,
  onChangeBirthday,
  onChangeCountry,
  onChangeNotifications,
  onSubmitForm,
  userName,
  mailChecked,
  femailChecked,
  country,
  birthday,
  notifications,
  errorMessage,
}: AppFormProps): JSX.Element => {
  return (
    <form className="form" id="data">
      <div className="form__error">{errorMessage}</div>
      <input
        onChange={(event) => {
          onChangeName(event);
        }}
        type="text"
        name="userName"
        id="userName"
        placeholder="Name"
        value={userName}
      />
      <div className="form__gender">
        <label htmlFor="male">male</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          checked={mailChecked}
          onChange={(e) => onChangeGender(e)}
        />
        <label htmlFor="female">female</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          checked={femailChecked}
          onChange={(e) => onChangeGender(e)}
        />
      </div>
      <select
        onBlur={(event) => {
          onChangeCountry(event);
        }}
        onChange={(event) => {
          onChangeCountry(event);
        }}
        name="country"
        id="country"
        value={country}
      >
        <option value="country">Сountry</option>
        <option value="Russia">Russia</option>
        <option value="Belorus">Belorus</option>
        <option value="Ukraine">Ukraine</option>
      </select>
      <div className="form__birthday">
        <label htmlFor="birthday">birthday</label>
        <input
          onChange={(event) => {
            onChangeBirthday(event);
          }}
          type="date"
          name="birthday"
          id="birthday"
          value={birthday}
        />
      </div>
      <div className="form__notifications">
        <label htmlFor="notifications">receive notifications</label>
        <input
          onChange={() => {
            onChangeNotifications(notifications);
          }}
          type="checkbox"
          name="notifications"
          id="notifications"
          checked={notifications}
        />
      </div>
      <input
        className="form__submit"
        type="submit"
        value="submit"
        onClick={(e) => onSubmitForm(e)}
      />
    </form>
  );
};
