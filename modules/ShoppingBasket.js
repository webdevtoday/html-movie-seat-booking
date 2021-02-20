class ShoppingBasket {
    constructor() {
        this.basketElement = document.querySelector('.ShoppingBasket');
        this.listElement = this.basketElement.querySelector('.ShoppingBasket_list');
        this.countElement = this.basketElement.querySelector('.ShoppingBasket_count');
        this.costElement = this.basketElement.querySelector('.ShoppingBasket_cost');
        this.linkingTicketsToTheList = {};
        this.count = 0;
    }

    showBasket() {
        this.basketElement.classList.add('ShoppingBasket--active');
    }

    hideBasket() {
        this.basketElement.classList.remove('ShoppingBasket--active');
    }

    createListElement(text) {
        const li = document.createElement('li');
        li.className = 'ShoppingBasket_item';
        li.innerHTML = text;
        return li;
    }

    countTickets() {
        return this.count;
    }

    increaseCount() {
        this.count++;
    }

    decreaseCount() {
        this.count--;
    }

    toggleTicket(ticket) {
        if (this.linkingTicketsToTheList.hasOwnProperty(ticket.getIDString())) {
            this.removeTicket(ticket);
            return;
        }
        this.appendTicket(ticket);
    }

    appendTicket(ticket) {
        const text = `${ticket.getRow()} row ${ticket.getSeat()} seat`;
        const li = this.createListElement(text);
        this.listElement.append(li);
        this.linkingTicketsToTheList[ticket.getIDString()] = li;
        this.increaseCount();
        if ( this.count === 1 ) this.showBasket();
    }

    removeTicket(ticket) {
        this.linkingTicketsToTheList[ticket.getIDString()].remove();
        delete this.linkingTicketsToTheList[ticket.getIDString()];
        this.decreaseCount();
        if ( this.count < 1 ) this.hideBasket();
    }
}

export { ShoppingBasket };
