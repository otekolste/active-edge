


const newtagHandler = async (event) => {
  event.preventDefault();

    const questionForm = document.getElementById('question-form').value.trim();
    const tagInput = document.getElementById('tag-input').value.trim();


  if (tagInput ) {
    const response = await fetch('/api/tags', {
      method: 'POST',
      body: JSON.stringify({ tag }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
    .querySelector('.question-form')
    .addEventListener('submit', newtagHandler);
