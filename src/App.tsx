import React, {useState} from 'react';

function App(){

    const [topic, setTopic] = useState('');
    const [tone, setTone] = useState('');
    const [length, setLength] = useState('');
    const [response, setResponse] = useState('');

const handleSubmit = async(e:React.FormEvent) => {
    e. preventDefault();
    const res = await fetch('http://localhost:8000/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({topic, tone, length})
        });
    const data = await res.json();
    setResponse(data.content);
    };
return (
    <div style={{padding: '2rem', maxWidth: '600px', margin: 'auto'}}>
    <h2> Content generator</h2>
    <form onSubmit = {handleSubmit}>

    <input
    placeholder="Topic"
    value={topic}
    onChange={(e) => setTopic(e.target.value)}
    /><br /><br />

    <input
    placeholder="Tone"
    value={tone}
    onChange={(e) => setTone(e.target.value)}
    /><br /><br />

    <input
    placeholder="Length"
    value={length}
    onChange={(e) => setLength(e.target.value)}
    /><br /><br />

    <button type="submit">Generate</button>
    </form>
    {response && (
        <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap', border: '1px solid #ccc', padding: '1rem'}}>
        <h3>Generated Content:</h3>
        <p>{response}</p>
        </div>
        )}
    </div>
    );
}
export default App;


