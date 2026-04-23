 const Department_array = [{
      id: '0',
      image: "assets/soilandwater.png",
      name: 'Soil and Water Engineering',
      floor: [
        ["HOD Office", "Conference Hall", "IDP", "Soil Testing Lab", "Water Resources Lab"],
        ["Post Office", "Warden Office", "Research Lab", "Classroom 405"]
      ],
      detail: 'The Department of Soil and Water Engineering was established in 1964. It offers B.Tech. in Agricultural Engineering and M.Tech. in Soil and Water Engineering. The department has well-equipped laboratories for soil physics, hydrology, and water resources testing. It focuses on sustainable water management and soil conservation practices for agricultural development.',
      faculty: 12,
      contact: {
        Dean: "+912942470837",
        HOD: "+912942470841"
      }
    },
    {
      id: '1',
      image: "assets/mech.png",
      name: 'Mechanical Engineering',
      floor: [
        ["HOD Office", "Conference Hall", "IDP", "Carpentry Shop", "Smith Shop"],
        ["Welding Shop", "Machine Shop", "Foundry Shop", "Pattern Shop"],
        ["Drawing Lab", "Fluid Mechanics Lab", "Thermodynamics Lab"]
      ],
      detail: 'The Department of Mechanical Engineering was established in 1964. It aims to produce mechanical engineers of highest caliber who would engage in research, design and development to help building the nation towards self-reliance in her technological needs. The department has state-of-the-art workshops and laboratories including CAD/CAM lab, Manufacturing lab, and Automobile engineering lab.',
      faculty: 18,
      contact: {
        Dean: "+912942470837",
        HOD: "+912942470842"
      }
    },
    {
      id: '2',
      image: "assets/Civil.jpg",
      name: 'Civil Engineering',
      floor: [
        ["HOD Office", "Conference Hall", "IDP", "Control Centre"],
        ["Mechanics Lab", "Civil Lab", "Environmental Lab"],
        ["Exam Hall", "Structural Engineering Lab", "Transportation Lab"]
      ],
      detail: 'The Department of Civil Engineering was established in 1965 offering diploma in Civil Engineering. Undergraduate program B.Tech. in Civil Engineering was started in 2007. The department has annual intake of 40 students through centralized admission process of Rajasthan Government. Well-equipped labs include Concrete Lab, Geotechnical Lab, and Survey Lab.',
      faculty: 13,
      contact: {
        Dean: "+912942470837",
        HOD: "+912942470843"
      }
    },
    {
      id: '3',
      image: "assets/elec.png",
      name: 'Electrical Engineering',
      floor: [
        ["HOD Office", "Conference Hall", "IDP", "Head Office"],
        ["Basic Electrical Lab", "Machine & Motors Lab", "Power Systems Lab"],
        ["EMI Lab", "Control Systems Lab", "High Voltage Lab"]
      ],
      detail: 'The Department of Electrical Engineering was established in 1957 offering diploma in electrical stream. Under Graduate program was started in 1996. The department has distinguished faculty holding M.E/M.Tech./M.B.A. degrees from renowned institutes. It offers instructions at undergraduate and postgraduate levels with state-of-art laboratories.',
      faculty: 15,
      contact: {
        Dean: "+912942470837",
        HOD: "+912942470844"
      }
    },
    {
      id: '4',
      image: "assets/CSE.png",
      name: 'Computer Science & Engineering',
      floor: [
        ["HOD Office", "Conference Hall", "IDP", "Smart Classroom"],
        ["OOPs Lab", "Networking Lab", "AI Lab", "Data Science Lab"],
        ["Software Engineering Lab", "Database Lab", "Seminar Hall"]
      ],
      detail: 'The Department offers B.Tech. (CSE), M.Tech. (CSE), and Ph.D (CSE) programs. The curriculum includes theoretical and practical aspects of Computer Technologies, Distributed Computing, Information Security, Wireless and Mobile Networks, Programming Languages, and Software engineering. Students have accomplished training projects in TCS, HCL, CTS, ISRO, NLC, IGCAR etc.',
      faculty: 22,
      contact: {
        Dean: "+912942470837",
        HOD: "+912942470845"
      }
    },
    {
      id: '5',
      image: "assets/mining.png",
      name: 'Mining Engineering',
      floor: [
        ["HOD Office", "Conference Hall", "IDP"],
        ["Rock Mechanics Lab", "Mines Surveying Lab", "Geology Lab"],
        ["Mining Technology Lab", "Ventilation Lab", "Mine Computing Lab"]
      ],
      detail: 'The Department of Mining Engineering was established in 1957 to impart diploma in mining and mine surveying, raised to degree level in 1996 with annual intake capacity of 20 students. The department has its own building with modern well-equipped laboratories. Guest faculties from DGMS, DMG, IBM, HZL, RSMML are invited for field-based knowledge.',
      faculty: 10,
      contact: {
        Dean: "+912942470837",
        HOD: "+912942470846"
      }
    },
    {
      id: '6',
      image: "assets/pg.png",
      name: 'PG Block',
      floor: [
        ["Department Section", "Professor Room", "IDP", "Research Office"],
        ["Networking Lab", "Computer Lab", "Seminar Hall"],
        ["Meeting Room", "Discussion Room", "Archive Room"]
      ],
      detail: 'The PG Block houses postgraduate offices, research scholars rooms, and departmental sections for M.Tech. and Ph.D. programs. It provides dedicated research spaces for scholars working on advanced technical projects.',
      faculty: 25,
      contact: {
        Dean: "+912942470837",
        Coordinator: "+912942470847"
      }
    },
    {
      id: '7',
      image: "assets/fmd.png",
      name: 'Farm Machinery & Power Engineering',
      floor: [
        ["HOD Office", "Conference Hall", "IDP"],
        ["Tractor Lab", "Farm Machinery Lab", "Power Engineering Lab"],
        ["Testing Lab", "Design Lab", "Workshop"]
      ],
      detail: 'The Department of Farm Machinery & Power Engineering focuses on design, development, and testing of agricultural machinery. It has a Farm Machinery Testing Centre approved by the Government of India. The department conducts research on modern agricultural equipment and sustainable farming technologies.',
      faculty: 14,
      contact: {
        Dean: "+912942470837",
        HOD: "+912942470848"
      }
    },
    {
      id: '8',
      image: "assets/canteen.jpeg",
      name: 'CTAE Canteen',
      floor: [
        ["Main Dining Area", "Fast Food Counter", "Tea/Coffee Corner"],
        ["Kitchen", "Storage", "Admin Office"]
      ],
      detail: 'The CTAE Canteen provides healthy and affordable food to students, faculty, and staff. It offers a variety of vegetarian dishes including North Indian, South Indian, and Rajasthani cuisine. The canteen operates from morning till evening to cater to all meals and snacks.',
      faculty: 8,
      contact: {
        Manager: "+912942470850"
      }
    },
    {
      id: '9',
      image: "assets/admin.png",
      name: 'Administrative Block',
      floor: [
        ["Dean Office", "Registrar Office", "Account Section"],
        ["Establishment Branch", "Academic Section", "Controller of Examination"],
        ["Store Section", "Vehicle Section", "Security Office"]
      ],
      detail: 'The Administrative Block houses the main offices of the college including Dean Office, Registrar, Accounts, Establishment, and Controller of Examination. It handles all administrative matters related to students, faculty, and staff.',
      faculty: 30,
      contact: {
        Dean: "+912942470837",
        Registrar: "+912942470838"
      }
    },
    {
      id: '10',
      image: "assets/liib.png",
      name: 'College Library',
      floor: [
        ["Reference Section", "Circulation Section", "Digital Library"],
        ["Periodical Section", "Book Bank", "Reading Hall"],
        ["E-Learning Centre", "Photocopy Section", "Cataloguing Section"]
      ],
      detail: 'The College Library has a vast collection of books, journals, and digital resources. It provides access to various online databases, e-journals, and research papers. The library has seating capacity for 200 students and operates from 9 AM to 5 PM on all working days.',
      faculty: 6,
      contact: {
        Librarian: "+912942470852"
      }
    },
    {
      id: '11',
      image: "assets/BSPopup.png",
      name: 'Basic Science',
      floor: [
        ["HOD Office", "Physics Lab", "Chemistry Lab"],
        ["Mathematics Department", "English Department", "Workshop"],
        ["Language Lab", "Physics Department", "Chemistry Department"]
      ],
      detail: 'The Department of Basic Science provides foundational courses in Physics, Chemistry, Mathematics, and English to all engineering students. It has well-equipped laboratories for physics and chemistry practicals. The department also offers value-added courses in communication skills and soft skills.',
      faculty: 20,
      contact: {
        Dean: "+912942470837",
        HOD: "+912942470853"
      }
    },
    {
      id: '12',
      image: "assets/ece.jpg",
      name: 'Electronics & Communication Engineering',
      floor: [
        ["HOD Office", "Conference Hall", "IDP"],
        ["Digital Electronics Lab", "Microprocessor Lab", "Communication Lab"],
        ["VLSI Lab", "Signal Processing Lab", "Microwave Lab"]
      ],
      detail: 'The Department of Electronics & Communication Engineering offers B.Tech. and M.Tech. programs. It has state-of-art laboratories including VLSI design lab, Embedded systems lab, and Communication lab. The department focuses on research in areas like wireless communication, embedded systems, and signal processing.',
      faculty: 16,
      contact: {
        Dean: "+912942470837",
        HOD: "+912942470854"
      }
    },
    {
      id: '13',
      image: "assets/fpd.png",
      name: 'Processing & Food Engineering',
      floor: [
        ["HOD Office", "Conference Hall", "IDP"],
        ["Food Processing Lab", "Dairy Lab", "Post Harvest Lab"],
        ["Storage Lab", "Quality Control Lab", "Packaging Lab"]
      ],
      detail: 'The Department of Processing & Food Engineering focuses on food processing technologies, post-harvest management, and value addition to agricultural produce. It has modern laboratories for food analysis, dairy processing, and grain storage. The department collaborates with food industries for research and training.',
      faculty: 12,
      contact: {
        Dean: "+912942470837",
        HOD: "+912942470855"
      }
    },
    {
      id: '14',
      image: "assets/renewable.png",
      name: 'Renewable Energy Engineering',
      floor: [
        ["HOD Office", "Conference Hall", "IDP"],
        ["Solar Energy Lab", "Wind Energy Lab", "Bio-energy Lab"],
        ["Energy Conservation Lab", "Hybrid Systems Lab", "Testing Lab"]
      ],
      detail: 'The Department of Renewable Energy Engineering focuses on solar, wind, bio-energy, and other renewable energy technologies. It offers M.Tech. program in Renewable Energy Engineering. The department has state-of-art laboratories for solar PV systems, wind energy, and bio-energy conversion.',
      faculty: 11,
      contact: {
        Dean: "+912942470837",
        HOD: "+912942470856"
      }
    },
    {
      id: '15',
      image: "assets/khosla.jpg",
      name: 'AN Khosla Hostel',
      floor: [
        ["Warden Office", "Common Room", "Mess"],
        ["Reading Room", "Internet Centre", "Sports Room"]
      ],
      detail: 'AN Khosla Hostel is one of the oldest hostels in the campus, named after the first Vice-Chancellor of MPUAT. It provides accommodation to undergraduate students. The hostel has modern amenities including Wi-Fi, mess, common room, and sports facilities.',
      faculty: 2,
      contact: {
        Warden: "+912942470860"
      }
    },
    {
      id: '16',
      image: "assets/mv.png",
      name: 'Maharana Vijsingh Hostel',
      floor: [
        ["Warden Office", "Common Room", "Mess"],
        ["Reading Room", "Internet Centre", "Sports Room"]
      ],
      detail: 'Maharana Vijsingh Hostel provides accommodation to final year students. The hostel is named after Maharana Pratap\'s successor. It has all modern facilities including round-the-clock security, mess, laundry, and recreational activities.',
      faculty: 2,
      contact: {
        Warden: "+912942470861"
      }
    },
    {
      id: '17',
      image: "assets/nscb.png",
      name: 'Neta Ji Subhas Chandra Hostel',
      floor: [
        ["Warden Office", "Common Room", "Mess"],
        ["Reading Room", "Internet Centre", "Sports Room"]
      ],
      detail: 'Neta Ji Subhas Chandra Hostel is named after the famous Indian leader. It provides accommodation to postgraduate students and research scholars. The hostel has well-furnished rooms, modern mess, and dedicated study areas.',
      faculty: 2,
      contact: {
        Warden: "+912942470862"
      }
    },
    {
      id: '18',
      image: "assets/sportcom.png",
      name: 'University Sports Complex',
      floor: [
        ["Indoor Stadium", "Basketball Court", "Volleyball Court"],
        ["Badminton Court", "Table Tennis", "Gymnasium"],
        ["Athletics Track", "Football Ground", "Cricket Ground"]
      ],
      detail: 'The University Sports Complex provides excellent sports facilities for students and staff. It includes indoor sports complex, outdoor grounds, and gymnasium. The complex hosts various inter-college and state-level tournaments. Students have represented the university in national level sports events.',
      faculty: 5,
      contact: {
        Director: "+912942470865"
      }
    },
    {
      id: '19',
      image: "assets/MPUAT.png",
      name: 'MPUAT Administrative Building',
      floor: [
        ["Vice-Chancellor Office", "Registrar Office", "Controller of Finance"],
        ["Examination Branch", "Academic Branch", "Administration"]
      ],
      detail: 'The MPUAT Administrative Building houses the main administration of Maharana Pratap University of Agriculture and Technology. It handles all university-level academic and administrative matters. The building also contains examination cell and finance department.',
      faculty: 50,
      contact: {
        VC: "+912942470101",
        Registrar: "+912942470102"
      }
    }
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
