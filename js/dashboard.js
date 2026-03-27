if (localStorage.getItem("user") === null) {
  window.location.href = "/login.html";
}

document.querySelector(".logo h2").innerHTML = title;

let skills = [];

let _sks = '<option value="">--Habilidade--</option>';

for (const S of SKILLS) {
  _sks += `<option value='${S.id}'>${S.label}</option>`
}

document.querySelector('#s-skills').innerHTML = _sks;

let bairros = [];

let brs = '<option value="">--Bairro--</option>';

for (const b of BAIRROS) {
  brs += `<option value='${b.id}'>${b.label}</option>`
}

document.querySelector('#s-bairros').innerHTML = brs;

// Remove skills
const removeSkill = (id) => {
  skills = skills.filter((s) => s != id);
  let sks = "";
  if (skills.length > 0) {
    for (const s of skills) {
      const SKILL = SKILLS.find((S) => S.id == s);
      sks += `<div class="skill">
        <span class="skill-desc">${SKILL.label}</span>
        <span class="skill-remove" id='${SKILLS.id}' onclick=removeSkill('${SKILL.id}');>&times;</span>
      </div>`;
    }
  }

  document.querySelector("#skills").innerHTML = sks;
};

// Add skills
document.getElementById("btn-add-skill").addEventListener("click", (e) => {
  const skill = document.querySelector("#s-skills").value;
  if (!!skill && !skills.includes(skill)) {
    skills.push(skill);
  }

  let sks = "";
  if (skills.length > 0) {
    for (const s of skills) {
      const SKILL = SKILLS.find((S) => S.id == s);
      sks += `<div class="skill">
        <span class="skill-desc">${SKILL.label}</span>
        <span class="skill-remove" id='${SKILLS.id}' onclick=removeSkill('${SKILL.id}');>&times;</span>
      </div>`;
    }
  }

  document.querySelector("#skills").innerHTML = sks;
});

// Update profile
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get("name");
  const surname = formData.get("surname");
  const tel = formData.get("tel");
  const about = formData.get("about");
  const location = formData.get('s-bairros')

  const res = await fetch(api_url + "/user/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      app: "technician",
      user: localStorage.getItem("user"),
    },
    body: JSON.stringify({ name, surname, tel, about, skills, location }),
  }).catch((error) => {
    console.log(error);
  });

  if (res.status === 200) {
    const data = await res.json();
    alert("Actualizado com êxito.");
  }
});

// Get profile
getProfile();

async function getProfile() {
  const res = await fetch(
    api_url + "/user/" + localStorage.getItem("user")
  ).catch((error) => {
    console.log(error);
  });

  if (res.status === 200) {
    const data = await res.json();
    document.getElementById("name").value = data.name || "";
    document.getElementById("surname").value = data.surname || "";
    document.getElementById("tel").value = data.tel || "";
    document.getElementById("about").value = data.about || "";
    document.getElementById("s-bairros").value = data.location;

    let sks = "";
    if (data.skills) {
      skills = data.skills;
      if (data.skills.length > 0) {
        for (const s of data.skills) {
          const SKILL = SKILLS.find((S) => S.id == s);
          sks += `<div class="skill">
        <span class="skill-desc">${SKILL.label}</span>
        <span class="skill-remove" id='${SKILLS.id}' onclick=removeSkill('${SKILL.id}');>&times;</span>
      </div>`;
        }
      }
    }
    document.querySelector("#skills").innerHTML = sks;
  }
}

// Logout
document.getElementById("btn-logout").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "/login.html";
});
