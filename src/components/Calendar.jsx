import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          {/* 8 am */}
          <tr>
            <td className="time">8 am</td>
            <Event
              event="Joe Coffee ☕️"
              color="green"
              location="148 Lafayette St"
            />
            <Event
              event="Brooklyn Bridge Walk 🌉"
              color="pink"
              location="Brooklyn Bridge"
            />
            <Event
              event="MoMA 🎨"
              color="blue"
              location="11 W 53rd St"
            />
            <td></td>
            <Event
              event="Bagel Breakfast 🥯"
              color="pink"
              location="Absolute Bagels, 39th & Broadway"
            />
            <Event
              event="High Line Stroll 🌳"
              color="blue"
              location="Gansevoort St"
            />
            <Event
              event="Central Park Bike Tour 🚴"
              color="green"
              location="Mid-Park at 72nd St"
            />
          </tr>

          {/* 9 am */}
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <Event
              event="Statue of Liberty 🗽"
              color="yellow"
              location="Liberty Island"
            />
            <td></td>
            <Event
              event="Lunch at Katz’s 🥪"
              color="green"
              location="205 E Houston St"
            />
            <td></td>
            <Event
              event="Empire State 🏙️"
              color="pink"
              location="20 W 34th St"
            />
            <td></td>
          </tr>

          {/* 10 am */}
          <tr>
            <td className="time">10 am</td>
            <Event
              event="Brooklyn Botanic Garden 🌸"
              color="blue"
              location="990 Washington Ave"
            />
            <td></td>
            <Event
              event="9/11 Memorial 🕯️"
              color="green"
              location="180 Greenwich St"
            />
            <td></td>
            <Event
              event="Chelsea Market 🍴"
              color="yellow"
              location="75 9th Ave"
            />
            <td></td>
            <Event
              event="Coney Island 🌊"
              color="blue"
              location="Brooklyn, NY"
            />
          </tr>

          {/* 11 am */}
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <Event
              event="Nat’l History Museum 🦖"
              color="green"
              location="200 Central Park West"
            />
            <td></td>
            <Event
              event="Lunch at Eataly 🍝"
              color="pink"
              location="200 5th Ave"
            />
            <td></td>
            <Event
              event="Grand Central 🚉"
              color="blue"
              location="89 E 42nd St"
            />
            <td></td>
          </tr>

          {/* 12 pm */}
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <td></td>
            <Event
              event="MSG Tour 🏟️"
              color="green"
              location="4 Pennsylvania Plaza"
            />
            <td></td>
            <Event
              event="Times Square 📸"
              color="pink"
              location="Broadway & W 47th St"
            />
            <td></td>
            <td></td>
          </tr>

          {/* 1 pm */}
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <Event
              event="Boathouse 🛶"
              color="blue"
              location="Park Drive North"
            />
            <td></td>
            <td></td>
            <Event
              event="Broadway Show 🎭"
              color="green"
              location="Theater District"
            />
            <td></td>
            <Event
              event="Williamsburg Nightlife 🎉"
              color="pink"
              location="Bedford Ave"
            />
          </tr>

          {/* 2 pm */}
          <tr>
            <td className="time">2 pm</td>
            <Event
              event="Yankees Game ⚾️"
              color="pink"
              location="1 E 161 St, Bronx"
            />
            <td></td>
            <td></td>
            <Event
              event="Greenwich Village Tour 🚶"
              color="yellow"
              location="Greenwich Village"
            />
            <td></td>
            <td></td>
            <td></td>
          </tr>

          {/* 3 pm */}
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <Event
              event="Chelsea Piers ⛳️"
              color="green"
              location="Pier 59, W 17th St"
            />
            <td></td>
            <td></td>
            <Event
              event="Fifth Ave Shopping 🛍️"
              color="blue"
              location="5th Avenue"
            />
            <td></td>
            <td></td>
          </tr>

          {/* 4 pm */}
          <tr>
            <td className="time">4 pm</td>
            <Event
              event="Joe’s Pizza 🍕"
              color="green"
              location="7 Carmine St"
            />
            <td></td>
            <Event
              event="High Line Sunset 🌇"
              color="yellow"
              location="Gansevoort St"
            />
            <td></td>
            <td></td>
            <Event
              event="East Village Bar Crawl 🍻"
              color="blue"
              location="St Marks Pl"
            />
            <td></td>
          </tr>

          {/* 5 pm */}
          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <Event
              event="Night Cruise 🚢"
              color="blue"
              location="Pier 83"
            />
            <td></td>
            <Event
              event="Jazz at Blue Note 🎷"
              color="pink"
              location="131 W 3rd St"
            />
            <td></td>
            <td></td>
            <Event
              event="Top of the Rock 🌇"
              color="yellow"
              location="30 Rockefeller Plaza"
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
