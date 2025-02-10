const input = document.querySelector('#favchap');
const button = document.querySelector('button'); // Fixed typo from 'cument' to 'document'
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value !== '') { // Changed '!=' to '!=='
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        });

        input.value = ''; // Removed duplicate line
    }
});