import "./Maandoverzicht.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const Maandoverzicht = () => {
  const getToken = () => {
    return localStorage.getItem('token');
  };
  useEffect(() => {
    const userData = async () => {
      const token = getToken();
      try {
        const response = await fetch('http://127.0.0.1:8000/api/user', {
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token,
          },
        })
        if (response.status === 405 || response.status === 401) {
          navigate('/login');
        }
      } catch (error) {
        console.log(error);
      }
    };
    userData();
  }, []);
  let navigate = useNavigate();
  useEffect(() => {
    const daysTag = document.querySelector(".days");
    const currentDate = document.querySelector(".current-date");
    const prevNextIcon = document.querySelectorAll(".icons span");

    // getting new date, current year and month
    let date = new Date(),
      currYear = date.getFullYear(),
      currMonth = date.getMonth();

    // storing full name of all months in array
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const renderCalendar = () => {
      let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // getting first day of month
      let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month
      let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // getting last day of month
      let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
      let liTag = "";

      for (let i = firstDayofMonth; i > 0; i--) {
        // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
      }

      for (let i = 1; i <= lastDateofMonth; i++) {
        // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday =
          i === date.getDate() &&
            currMonth === date.getMonth() &&
            currYear === date.getFullYear()
            ? "active"
            : "";
        liTag += `<li class="${isToday}">${i}</li>`;
      }

      for (let i = lastDayofMonth; i < 6; i++) {
        // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
      }

      currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
      daysTag.innerHTML = liTag;

      const dayElements = document.querySelectorAll('.days li');
      dayElements.forEach((dayElement, index) => {
        dayElement.addEventListener('click', () => {
          const selectedDate = parseInt(dayElement.textContent) + 1; // Corrected way to get the selected date
          const clickeddate = new Date(currYear, currMonth, selectedDate);
          navigate(
            '/dagoverzicht',
            {
              state: {
                clickeddate
              }
            }
          )
        });
      });
    };

    renderCalendar();

    prevNextIcon.forEach((icon) => {
      // getting prev and next icons
      icon.addEventListener("click", () => {
        // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
          // if current month is less than 0 or greater than 11
          // creating a new date of current year & month and pass it as date value
          date = new Date(currYear, currMonth, new Date().getDate());
          currYear = date.getFullYear(); // updating current year with new date year
          currMonth = date.getMonth(); // updating current month with new date month
          console.log(date);
        } else {
          date = new Date(); // pass the current date as date value
          console.log(date);
        }
        renderCalendar(); // calling renderCalendar function
      });
    });
  }, []);

  return (
    <div className="Test">
      <div className="maand-text">MAANDOVERZICHT</div>

      <div className="maandoverzicht-container">
        <div className="maandoverzicht-text">Dit is uw maandoverzicht</div>
      </div>
      <div class="wrapper">
        <header>
          <p class="current-date"></p>
          <div class="icons">
            <span id="prev" class="material-symbols-rounded">
              ⬅
            </span>
            <span id="next" class="material-symbols-rounded">
              ➡
            </span>
          </div>
        </header>
        <div class="calendar">
          <ul class="weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul class="days"></ul>
        </div>
      </div>
    </div>
  );
};

export default Maandoverzicht;