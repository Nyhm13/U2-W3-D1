class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  hasSameOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

let pets = [];

function addPet(event) {
  event.preventDefault();
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const pet = new Pet(petName, ownerName, species, breed);
  pets.push(pet);
  displayPets();
  updateSelectOptions();
}
function displayPets() {
  const petList = document.getElementById("petList");
  petList.innerHTML = "";
  pets.forEach((pet, index) => {
    const li = document.createElement("li");
    li.textContent = `${pet.petName} (${pet.species}, ${pet.breed}) - Proprietario: ${pet.ownerName}`;
    li.setAttribute("data-index", index);
    petList.appendChild(li);
    console.log(pets);
});
}

function checkSameOwner() {
    const index1 = document.getElementById('pet1').value;
    const index2 = document.getElementById('pet2').value;
    if (index1 === index2) {
        alert('Seleziona due animali diversi!');
        return;
    }
    const pet1 = pets[index1];
    const pet2 = pets[index2];
    if (pet1.hasSameOwner(pet2)) {
        alert(`${pet1.petName} e ${pet2.petName} hanno lo stesso proprietario!`);
    } else {
        alert(`${pet1.petName} e ${pet2.petName} hanno proprietari diversi.`);
    }
}

function updateSelectOptions() {
    const pet1Select = document.getElementById('pet1');
    const pet2Select = document.getElementById('pet2');
    pet1Select.innerHTML = '';
    pet2Select.innerHTML = '';
    pets.forEach((pet, index) => {
        const option1 = document.createElement('option');
        option1.value = index;
        option1.textContent = pet.petName;
        pet1Select.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = index;
        option2.textContent = pet.petName;
        pet2Select.appendChild(option2);
    });
}
