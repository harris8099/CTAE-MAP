 const Department_array = [{
      id: '0',
      image: "location",
      name: 'Soil and Water Engineering',
      floor: [
        ["Hod office", "Conference Hall", "IDP"],
        ["Post Office", "Warden Office", "405"]
      ],
      detail: 'The Agriculture Department plays a pivotal role in nurturing the backbone of human civilization',
      faculty: 10,
      contact: {
        Dean: "+912942470837",
      }
    },
    {
      id: '1',
      image: "location",
      name: 'Mechanical Engineering',
      floor: [
        ["Hod office", "Conference Hall", "IDP", "CARPENTRY SHOP", "Smith Shop", "Welding shop", "Machine shop", "Foundary Shop", "Pattern Shop", "Drawing Lab", "Fluid Lab"],

      ],
      detail: 'To provide mechanical engineers of highest caliber who would engage in research, design and development to help building the nation towards self reliance in her technological need. To become a centre of excellence in education, research and technological service to the nation for its need in design and manufacturing independence.',
      faculty: 10,
      contact: {
        Dean: "+912942470837",
      }
    },
    {
      id: '2',
      image: "location",
      name: 'Civil Engineering ',
      floor: [
        ["Mechanics lab", "Civil Lab", "Exam hall"],
        ["Hod office", "Conference Hall", "IDP", "Control Centre"]
      ],
      detail: 'The department of Civil Engineering was established in year 1965 offering diploma in Civil Engineering. Undergraduate program B.Tech. in the Civil Engineering was started in 2007. The undergraduate programme of the department is approved by the AICTE. Currently the department has an annual intake of 40 students through centralized admission process of Rajasthan Government.',
      faculty: 13,
      contact: {
        Dean: "+912942470837",
      }
    },
    {
      id: '3',
      image: "location",
      name: 'Electrical Engineering',
      floor: [
        ["IDP", "basic Electrical lab ", "Machine Motors Lab"],
        ["HOD Office", " Conference Hall ", "Head Office", "EMI lab", "Power System "]
      ],
      detail: 'The department of electrical engineering was established in the year 1957 offering diploma in electrical stream. Under Graduate program was started in 1996 with discontinuation of diploma program.The Department of Electrical Engineering is one of the well established department in the College of Technology and Engineering (C.T.A.E.), and has a distinguished faculty, all holding M.E/ M.Tech./ M.B.A. degrees from renowned institutes in India.the Department offers instructions at undergraduate and postgraduate levels with the aim of providing a sound background in the areas of Electrical Engineering.',
      faculty: 9,
      contact: {
        Dean: "+912942470837",
      }
    },
    {
      id: '4',
      image: "location",
      name: 'Computer Science Engineering',
      floor: [
        ["Hod office", , "IDP"],
        ["Oops Lab", "Networking lab", "AVP Hall", "AI Classroom"]
      ],
      detail: 'The Department aims at imparting quality education and strive to quench the thirst for knowledge.The Department offers B.Tech. (CSE) and M.Tech. (CSE) and Ph.D (CSE) programs.  The Department lays emphasis on theoretical and practical aspects of subjects taught viz. Computer Technologies, Distributed Computing, Information Security, High Speed Networks, Wireless and Mobile Networks, Programming Languages, networking and database management, Software engineering and several other domains of computer engineering. Moreover updation of syllabus is carried out at regular span of time to keep in pace with the recent technologies.The classes are conducted by procuring latest technologies viz. smart classes and multimedia.The department has developed a high end seminar hall with the state of art computation and multimedia facility.The curriculum inculcates industrial summer training which enable students to get acquainted with work culture and in turn help them groom themselves. CSE students have accomplished training projects in esteemed organizations such as TCS, HCL, RAMCO, CTS, Nature Soft, NAL, ISRO, NLC, IGCAR etc.',

      faculty: 18,
      contact: {
        Dean: "+912942470837",
      }
    },
    {
      id: '5',
      image: "location",
      name: 'Minning Engineering',
      floor: [
        ["Hod office", "Conference Hall", "IDP"],
        ["Rock Mechanic Lab", "Mines Surveying Lab", "Geology Lab", "Technology Lab"]
      ],
      detail: 'The Department of Mining Engineering was established in 1957 in Udaipur to impart diploma in mining and mine surveying and in 1996, it was raised to degree level to cater the demand and need of the mining sector with an annual intake capacity of 20 students. The department has its own building with all infrastructure facilities and modern well equipped laboratories i.e Mine computing laboratory, Rock mechanics & Dimensional Stone Laboratory, Mining and Mineral Processing, Environmental & Geology Laboratory, Survey Lab. etc. and a departmental library having good number of books. Department is situated in the heart of mining activities, so that students get practical exposures with theory part. We have a unique way to imparting field based knowledge, in which guest faculties from renowned fields like DGMS, DMG, IBM, HZL, RSMML are invited',


      faculty: 10,
      contact: {
        Dean: "+912942470837",
      }
    },
    {
      id: '6',
      image: "location",
      name: 'PG BLock',
      floor: [
        ["Department Section ", "Professor Room", "IDP"],
        ["Networking lab ", "HOD Office"]
      ],
      detail: 'The pg block',
      faculty: 5,
      contact: {
        Dean: "+912942470837",
      }
    },
    {
      id: '7',
      image: "location",
      name: 'PG BLock',
      floor: [
        ["Department Section ", "Professor Room", "IDP"],
        ["Networking lab ", "HOD Office"]
      ],
      detail: 'The pg block',
      faculty: 5,
      contact: {
        Dean: "+912942470837",
      }
    },
    {
      id: '8',
      image: "location",
      name: 'Canteen ',
      floor: [],
      detail: "Food prepared",
      faculty: 1,
      contact: {
        Dean: "+912942470837",
      }
    },


    ];

    const search_btn = document.getElementById("search-btn"); // mod
    const inputField = document.querySelector('.search-input'); //mod
    const image = document.getElementById("image");
    const building = document.querySelectorAll("#building p");
    const faculty = document.getElementById("faculty");
    const Overview = document.getElementById("Overview");
    const Floor_plan = document.getElementById("Floor-plan");
    const Contact = document.getElementById("Contact");
    const overview_tab = document.getElementById("overview-content");
    const floor_tab = document.getElementById("floor-content");
    const contact_tab = document.getElementById("contact-content");
    const select_floor = document.getElementById("flr");
    const f_detail = document.getElementById("f-detail");
    const main_box = document.getElementById("box_1");
    const MaPs = document.getElementById("map");

    main_box.style.display = "none"; 1195
    MaPs.style.left = '0';

    let department_floor = ["ground floor", "first floor", "second floor", "third floor", "fourth floor"] //mod

    // pane hide/unhide
    main_box.style.display = "none";

    // event listener for serch button
    search_btn.addEventListener("click", () => { searchBox() }); //mod


    // // search function
    // function searchBox() {
    //   let user_input = inputField.value;     //mod
    //   console.log(user_input);
    // }
    function searchBox() {
      let user_input = inputField.value;     //mod
      for (let i = 0; i < Department_array.length; i++) {
        // console.log(Department_array[i].name.toLowerCase());
        if (user_input.toLowerCase().trim() == `${Department_array[i].name.toLowerCase().trim()}`) {
          console.log("success");
        }
      }
      // console.log(user_input);
    }


    // Main funtction
    function detail_pane(id) {
      MaPs.style.left = '350px';
      overview_tab.style.display = "none";
      floor_tab.style.display = "none";
      contact_tab.style.display = "none";
      let is_validate = true;

      let dept_length = Department_array.length;

      for (let key in Department_array) {
        console.log("length:", Department_array.length);
        // console.log(key);
        if (id == Department_array[key].id) {
          is_validate = true;
          break;
        }
      }

      function Button_Click() {
        overview_tab.style.display = "block";
        building[0].innerText = Department_array[id].name;
        building[1].innerText = `No. of floors: ${Department_array[id].floor.length}`;
        building[2].innerText = Department_array[id].detail;

      }

      if (is_validate) {
        main_box.style.display = "block";
        let department = Department_array[id];

        Button_Click();
        // 
        select_floor.innerHTML = "";
        function floor_count(n) {
          for (let i = 0; i < n; i++) {
            const new_options = document.createElement("option");
            new_options.text = department_floor[i];
            new_options.value = i;
            select_floor.appendChild(new_options);
          }
        }

        //add image
        image.style.backgroundImage = `url(assets/${id}.jpg)`;

        //event listeners for overview
        Overview.addEventListener("click", () => {

          overview_tab.style.display = "block";
          floor_tab.style.display = "none";
          contact_tab.style.display = "none";



          //others
          building[0].innerText = department.name;
          building[1].innerText = `No. of floors: ${department.floor.length}`;
          building[2].innerText = department.detail;
        })

        let thanos = 0;

        const addFloorData = () => {
          function departmentFloorData() {
            let str = '';
            for (let value of department.floor[thanos]) {
              str += `<li>${value}</li>`
            }
            return str;
          }

          f_detail.innerHTML = `<div class="floor-details" data-floor="${id}">
            <h2>${department_floor[parseInt(thanos)]}</h2>
            <p>This is a description of the ${department_floor[parseInt(thanos)]}.</p>
            
            <ul>
                ${departmentFloorData()}
            </ul>
    
          </div>`
        }
        addFloorData();
        select_floor.addEventListener('change', (event) => {
          thanos = event.target.value;
          addFloorData();
        })
        floor_count(department.floor.length);
        // event listeners for floor_plan
        Floor_plan.addEventListener("click", () => {
          overview_tab.style.display = "none";
          floor_tab.style.display = "block";
          contact_tab.style.display = "none";

          // console.log(parseInt(thanos));
        })


        // overview tab
        Contact.addEventListener("click", () => {
          overview_tab.style.display = "none";
          floor_tab.style.display = "none";
          contact_tab.style.display = "block";
        })
      }
    }


    // detail_pane('1');
