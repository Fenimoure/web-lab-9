class Flat {
    constructor(address, rooms, price, repair) {
        this.address = address;

        let err_msg = "Error: Incorrect arguments passed into constructor of 'Flat'. Defaulting values to '0'/'false'"

        if (isNaN(parseInt(rooms))) {
            console.error(err_msg);
            this.rooms = 0;

        } else {
            this.rooms = rooms
        }

        if (isNaN(parseFloat(price))) {
            console.error(err_msg);
            this.price = 0;

        } else {
            this.price = price
        }

        if (typeof repair === "boolean") {
            this.repair = repair;
        } else {
            console.error(err_msg);
            this.repair = false;
        }
    }

    show() {
        let Flat_itemDiv = document.createElement('div');
        Flat_itemDiv.className = "flatInfo";

        Flat_itemDiv.textContent = "Квартира: " + this.address;

        let Flat_infoTable = document.createElement('table');

        let Flat_roomsRow = document.createElement('tr');
        Flat_roomsRow.appendChild(document.createElement('td'));
        Flat_roomsRow.appendChild(document.createElement('td'));
        Flat_roomsRow.children[0].textContent = "Кімнат:";
        Flat_roomsRow.children[1].textContent = this.rooms;

        let Flat_priceRow = document.createElement('tr');
        Flat_priceRow.appendChild(document.createElement('td'));
        Flat_priceRow.appendChild(document.createElement('td'));
        Flat_priceRow.children[0].textContent = "Ціна:";
        Flat_priceRow.children[1].textContent = this.price;

        let Flat_repairRow = document.createElement('tr');
        Flat_repairRow.appendChild(document.createElement('td'));
        Flat_repairRow.appendChild(document.createElement('td'));
        Flat_repairRow.children[0].textContent = "Відремонтована:";
        Flat_repairRow.children[1].textContent = this.repair ? "Так" : "Ні";

        Flat_infoTable.appendChild(Flat_roomsRow);
        Flat_infoTable.appendChild(Flat_priceRow);
        Flat_infoTable.appendChild(Flat_repairRow);

        Flat_itemDiv.appendChild(Flat_infoTable);

        return Flat_itemDiv;
    }
}