import {useState} from 'react';
import './App.css';

function App() {
  const [paino, setPaino] = useState(0);
  const [pullot, setPullot] = useState(0);
  const [aika, setAika] = useState(0);
  const [sukupuoli, setSukupuoli] = useState("mies");
  const [tulos, setTulos] = useState(0);
  const calculate = (e) => {
    e.preventDefault();
    let promillet = 0;
    if (sukupuoli === 'mies') {
      promillet = (((pullot * 0.33) * 8 * 4.5) - ((paino/10) * aika)) / (paino * 0.7);
    }
    else {
      promillet = (((pullot * 0.33) * 8 * 4.5) - ((paino/10) * aika)) / (paino * 0.8);
    }
    if (promillet < 0)
       promillet = 0;
    setTulos(promillet);

  }
  return (
    <div>
      <form onSubmit={calculate}>
      <h3>Calculating alcohol blood level</h3>
          <div>
          <label>Weight (Kilos)</label>
          <input 
            type="number" 
            step="1"
            value={paino}
            onChange={e => setPaino(e.target.value)} 
          />
          </div>
          <div>
          <label>Bottles</label>
          <select onChange={e => setPullot(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          </select>
          </div>
          <div>
          <label>Time (hours)</label>
          <select onChange={e => setAika(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          </select>
          </div>
          <div>
          <label>Sukupuoli</label>
          <label><input type="radio" name="sukupuoli" value="mies" defaultChecked onChange={e => setSukupuoli(e.target.value)} />Mies</label>
          <label><input type="radio" name="sukupuoli" value="nainen" onChange={e => setSukupuoli(e.target.value)} />Nainen</label>
          </div>
          <div>
          <output>{tulos.toFixed(1)}</output>
        </div>
        <button onClick={() => calculate}>Laske</button>
        </form>
    </div>
  );
}

export default App;
