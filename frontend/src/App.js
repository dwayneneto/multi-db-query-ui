// // // // // src/App.js
// // // // import React, { useState } from "react";
// // // // import axios from "axios";

// // // // export default function App() {
// // // //   const [schema, setSchema] = useState("");
// // // //   const [prompt, setPrompt] = useState("");
// // // //   const [response, setResponse] = useState(null);
// // // //   const [sql, setSql] = useState("");

// // // //   const handleSubmit = async () => {
// // // //     const res = await axios.post("http://localhost:8000/query", { schema, prompt });
// // // //     setSql(res.data.sql);
// // // //     setResponse(res.data.result);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Prompt to SQL</h2>
// // // //       <input placeholder="Schema" value={schema} onChange={(e) => setSchema(e.target.value)} />
// // // //       <input placeholder="Prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
// // // //       <button onClick={handleSubmit}>Submit</button>
// // // //       {sql && <pre>{sql}</pre>}
// // // //       {response && <table><thead><tr>{response.columns.map(c => <th>{c}</th>)}</tr></thead><tbody>{response.rows.map(row => <tr>{row.map(cell => <td>{cell}</td>)}</tr>)}</tbody></table>}
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useState } from "react";
// // // import axios from "axios";

// // // export default function App() {
// // //   const [schema, setSchema] = useState("");
// // //   const [prompt, setPrompt] = useState("");
// // //   const [sql, setSql] = useState("");
// // //   const [manualSQL, setManualSQL] = useState("");
// // //   const [response, setResponse] = useState(null);

// // //   const handlePromptSubmit = async () => {
// // //     try {
// // //       const res = await axios.post("http://localhost:8000/query", {
// // //         schema,
// // //         prompt,
// // //       });
// // //       setSql(res.data.sql);
// // //       setResponse(res.data.result);
// // //     } catch (err) {
// // //       alert("Error: " + err.response?.data?.error || err.message);
// // //     }
// // //   };

// // //   const handleManualSubmit = async () => {
// // //     try {
// // //       const res = await axios.post("http://localhost:8000/manual-query", {
// // //         sql: manualSQL,
// // //       });
// // //       setSql(manualSQL);
// // //       setResponse(res.data.result);
// // //     } catch (err) {
// // //       alert("Error: " + err.response?.data?.error || err.message);
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ padding: 20 }}>
// // //       <h2>🔍 Prompt to SQL</h2>
// // //       <input
// // //         placeholder="Schema (e.g. users(id,name,email))"
// // //         value={schema}
// // //         onChange={(e) => setSchema(e.target.value)}
// // //         style={{ width: "80%", marginBottom: 10 }}
// // //       />
// // //       <br />
// // //       <input
// // //         placeholder="Enter your prompt"
// // //         value={prompt}
// // //         onChange={(e) => setPrompt(e.target.value)}
// // //         style={{ width: "80%", marginBottom: 10 }}
// // //       />
// // //       <br />
// // //       <button onClick={handlePromptSubmit}>Submit Prompt</button>

// // //       <h2 style={{ marginTop: 40 }}>📝 Run Manual SQL</h2>
// // //       <input
// // //         placeholder="Enter SQL (e.g. SELECT * FROM users)"
// // //         value={manualSQL}
// // //         onChange={(e) => setManualSQL(e.target.value)}
// // //         style={{ width: "80%", marginBottom: 10 }}
// // //       />
// // //       <br />
// // //       <button onClick={handleManualSubmit}>Run SQL</button>

// // //       {sql && (
// // //         <div style={{ marginTop: 20 }}>
// // //           <h4>Generated SQL:</h4>
// // //           <pre>{sql}</pre>
// // //         </div>
// // //       )}

// // //       {response && (
// // //         <div>
// // //           <h4>Result:</h4>
// // //           <table border="1" cellPadding="5">
// // //             <thead>
// // //               <tr>
// // //                 {response.columns.map((col, idx) => (
// // //                   <th key={idx}>{col}</th>
// // //                 ))}
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {response.rows.map((row, i) => (
// // //                 <tr key={i}>
// // //                   {row.map((cell, j) => (
// // //                     <td key={j}>{cell}</td>
// // //                   ))}
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }


// // import React, { useState } from "react";
// // import axios from "axios";

// // export default function App() {
// //   const [dbType, setDbType] = useState("mysql");
// //   const [schema, setSchema] = useState("");
// //   const [prompt, setPrompt] = useState("");
// //   const [manualSQL, setManualSQL] = useState("");
// //   const [collection, setCollection] = useState("");
// //   const [mongoQuery, setMongoQuery] = useState("{}");
// //   const [result, setResult] = useState(null);
// //   const [sql, setSql] = useState("");

// //   const backend = "http://localhost:8000";

// //   const handlePromptSubmit = async () => {
// //     try {
// //       let res;
// //       if (dbType === "mysql") {
// //         res = await axios.post(`${backend}/query`, { prompt, schema });
// //       } else if (dbType === "postgres") {
// //         res = await axios.post(`${backend}/postgres-nl-query`, { prompt, schema });
// //       } else if (dbType === "mongo") {
// //         res = await axios.post(`${backend}/mongo-nl-query`, { prompt, schema });
// //       }

// //       setSql(res.data.sql || "");
// //       setResult(res.data.result);
// //     } catch (err) {
// //       alert("Error: " + (err.response?.data?.error || err.message));
// //     }
// //   };

// //   const handleManualSubmit = async () => {
// //     try {
// //       let res;
// //       if (dbType === "mysql") {
// //         res = await axios.post(`${backend}/manual-query`, { sql: manualSQL });
// //       } else if (dbType === "postgres") {
// //         res = await axios.post(`${backend}/postgres-query`, { sql: manualSQL });
// //       } else if (dbType === "mongo") {
// //         res = await axios.post(`${backend}/mongo-query`, {
// //           collection,
// //           query: JSON.parse(mongoQuery)
// //         });
// //       }
// //       setSql(manualSQL);
// //       setResult(res.data.result);
// //     } catch (err) {
// //       alert("Error: " + (err.response?.data?.error || err.message));
// //     }
// //   };

// //   const renderResult = () => {
// //     if (!result) return null;
// //     if (dbType === "mongo") {
// //       return (
// //         <table border="1" cellPadding="5">
// //           <thead>
// //             <tr>
// //               {Object.keys(result[0] || {}).map((key) => (
// //                 <th key={key}>{key}</th>
// //               ))}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {result.map((doc, i) => (
// //               <tr key={i}>
// //                 {Object.values(doc).map((val, j) => (
// //                   <td key={j}>{JSON.stringify(val)}</td>
// //                 ))}
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       );
// //     } else {
// //       return (
// //         <table border="1" cellPadding="5">
// //           <thead>
// //             <tr>
// //               {result.columns.map((col, i) => <th key={i}>{col}</th>)}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {result.rows.map((row, i) => (
// //               <tr key={i}>
// //                 {row.map((cell, j) => <td key={j}>{cell}</td>)}
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       );
// //     }
// //   };

// //   return (
// //     <div style={{ padding: 20 }}>
// //       <h2>📊 Universal DB Query Interface</h2>

// //       <label>Select Database:</label>
// //       <select value={dbType} onChange={(e) => setDbType(e.target.value)}>
// //         <option value="mysql">MySQL</option>
// //         <option value="postgres">PostgreSQL</option>
// //         <option value="mongo">MongoDB</option>
// //       </select>

// //       <hr />

// //       <h3>🧠 Natural Language Prompt</h3>
// //       <input
// //         placeholder="Schema (optional)"
// //         value={schema}
// //         onChange={(e) => setSchema(e.target.value)}
// //         style={{ width: "80%", marginBottom: 8 }}
// //       />
// //       <br />
// //       <input
// //         placeholder="Prompt (e.g. show all users over 30)"
// //         value={prompt}
// //         onChange={(e) => setPrompt(e.target.value)}
// //         style={{ width: "80%", marginBottom: 8 }}
// //       />
// //       <br />
// //       <button onClick={handlePromptSubmit}>Submit Prompt</button>

// //       <h3 style={{ marginTop: 30 }}>✍️ Manual Query</h3>

// //       {dbType === "mongo" && (
// //         <>
// //           <input
// //             placeholder="Collection"
// //             value={collection}
// //             onChange={(e) => setCollection(e.target.value)}
// //             style={{ width: "80%", marginBottom: 8 }}
// //           />
// //           <br />
// //           <input
// //             placeholder='Query JSON (e.g. {"age": {"$gt": 25}})'
// //             value={mongoQuery}
// //             onChange={(e) => setMongoQuery(e.target.value)}
// //             style={{ width: "80%", marginBottom: 8 }}
// //           />
// //         </>
// //       )}

// //       {dbType !== "mongo" && (
// //         <input
// //           placeholder="SQL (e.g. SELECT * FROM table)"
// //           value={manualSQL}
// //           onChange={(e) => setManualSQL(e.target.value)}
// //           style={{ width: "80%", marginBottom: 8 }}
// //         />
// //       )}

// //       <br />
// //       <button onClick={handleManualSubmit}>Run Manual Query</button>

// //       {sql && (
// //         <>
// //           <h4 style={{ marginTop: 30 }}>🧾 SQL Used</h4>
// //           <pre>{sql}</pre>
// //         </>
// //       )}

// //       <h4 style={{ marginTop: 20 }}>📋 Result</h4>
// //       {renderResult()}
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [dbType, setDbType] = useState("mysql");
//   const [schema, setSchema] = useState("");
//   const [prompt, setPrompt] = useState("");
//   const [manualSQL, setManualSQL] = useState("");
//   const [collection, setCollection] = useState("");
//   const [mongoQuery, setMongoQuery] = useState("{}");
//   const [result, setResult] = useState(null);
//   const [sql, setSql] = useState("");

//   const backend = "http://localhost:8000";

//   const handlePromptSubmit = async () => {
//     try {
//       let res;
//       if (dbType === "mysql") {
//         res = await axios.post(`${backend}/query`, { prompt, schema });
//       } else if (dbType === "postgres") {
//         res = await axios.post(`${backend}/postgres-nl-query`, { prompt, schema });
//       } else if (dbType === "mongo") {
//         res = await axios.post(`${backend}/mongo-nl-query`, { prompt, schema });
//       }

//       setSql(res.data.sql || "");
//       setResult(res.data.result);
//     } catch (err) {
//       alert("Error: " + (err.response?.data?.error || err.message));
//     }
//   };

//   const handleManualSubmit = async () => {
//     try {
//       let res;
//       if (dbType === "mysql") {
//         res = await axios.post(`${backend}/manual-query`, { sql: manualSQL });
//       } else if (dbType === "postgres") {
//         res = await axios.post(`${backend}/postgres-query`, { sql: manualSQL });
//       } else if (dbType === "mongo") {
//         res = await axios.post(`${backend}/mongo-query`, {
//           collection,
//           query: JSON.parse(mongoQuery)
//         });
//       }
//       setSql(manualSQL);
//       setResult(res.data.result);
//     } catch (err) {
//       alert("Error: " + (err.response?.data?.error || err.message));
//     }
//   };

//   const renderResult = () => {
//     if (!result) return null;

//     const tableStyle = {
//       borderCollapse: "collapse",
//       width: "100%",
//       marginTop: 10,
//     };

//     const thtd = {
//       border: "1px solid #ccc",
//       padding: "8px",
//       textAlign: "left",
//     };

//     return (
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             {(dbType === "mongo"
//               ? Object.keys(result[0] || {})
//               : result.columns
//             ).map((col, i) => (
//               <th style={thtd} key={i}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {(dbType === "mongo" ? result : result.rows).map((row, i) => (
//             <tr key={i}>
//               {(dbType === "mongo" ? Object.values(row) : row).map((cell, j) => (
//                 <td style={thtd} key={j}>
//                   {typeof cell === "object" ? JSON.stringify(cell) : cell}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div style={{ padding: 30, fontFamily: "Arial, sans-serif", maxWidth: 900, margin: "auto" }}>
//       <h2 style={{ marginBottom: 10 }}>📊 Universal DB Query Interface</h2>

//       <div style={{ marginBottom: 20 }}>
//         <label><strong>Select Database:</strong></label><br />
//         <select value={dbType} onChange={(e) => setDbType(e.target.value)} style={{ padding: 6, marginTop: 4 }}>
//           <option value="mysql">MySQL</option>
//           <option value="postgres">PostgreSQL</option>
//           <option value="mongo">MongoDB</option>
//         </select>
//       </div>

//       {/* --- Prompt Section --- */}
//       <div style={{ marginBottom: 30 }}>
//         <h3>🧠 Natural Language Prompt</h3>
//         <input
//           placeholder="Schema (optional)"
//           value={schema}
//           onChange={(e) => setSchema(e.target.value)}
//           style={{ width: "100%", padding: 8, marginBottom: 8 }}
//         />
//         <input
//           placeholder="Prompt (e.g. show all users over 30)"
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           style={{ width: "100%", padding: 8, marginBottom: 8 }}
//         />
//         <button
//           onClick={handlePromptSubmit}
//           style={{
//             padding: "10px 16px",
//             background: "#4CAF50",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//             borderRadius: 4
//           }}
//         >
//           Submit Prompt
//         </button>
//       </div>

//       {/* --- Manual Query Section --- */}
//       <div>
//         <h3>✍️ Manual Query</h3>

//         {dbType === "mongo" ? (
//           <>
//             <input
//               placeholder="Collection"
//               value={collection}
//               onChange={(e) => setCollection(e.target.value)}
//               style={{ width: "100%", padding: 8, marginBottom: 8 }}
//             />
//             <input
//               placeholder='Query JSON (e.g. {"gpa": {"$gt": 3.0}})'
//               value={mongoQuery}
//               onChange={(e) => setMongoQuery(e.target.value)}
//               style={{ width: "100%", padding: 8, marginBottom: 8 }}
//             />
//           </>
//         ) : (
//           <input
//             placeholder="SQL (e.g. SELECT * FROM students)"
//             value={manualSQL}
//             onChange={(e) => setManualSQL(e.target.value)}
//             style={{ width: "100%", padding: 8, marginBottom: 8 }}
//           />
//         )}

//         <button
//           onClick={handleManualSubmit}
//           style={{
//             padding: "10px 16px",
//             background: "#2196F3",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//             borderRadius: 4
//           }}
//         >
//           Run Manual Query
//         </button>
//       </div>

//       {/* --- SQL Used --- */}
//       {sql && dbType !== "mongo" && (
//         <>
//           <h4 style={{ marginTop: 30 }}>🧾 SQL Used</h4>
//           <pre style={{
//             background: "#f4f4f4",
//             padding: 10,
//             borderRadius: 4,
//             overflowX: "auto"
//           }}>{sql}</pre>
//         </>
//       )}

//       {/* --- Results --- */}
//       {result && (
//         <>
//           <h4 style={{ marginTop: 30 }}>📋 Result</h4>
//           {renderResult()}
//         </>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [dbType, setDbType] = useState("mysql");
  const [schema, setSchema] = useState("");
  const [prompt, setPrompt] = useState("");
  const [manualSQL, setManualSQL] = useState("");
  const [collection, setCollection] = useState("");
  const [mongoQuery, setMongoQuery] = useState("{}");
  const [result, setResult] = useState(null);
  const [sql, setSql] = useState("");

  const backend = "http://localhost:8000";

  const handlePromptSubmit = async () => {
    try {
      let res;
      if (dbType === "mysql") {
        res = await axios.post(`${backend}/query`, { prompt, schema });
      } else if (dbType === "postgres") {
        res = await axios.post(`${backend}/postgres-nl-query`, { prompt, schema });
      } else if (dbType === "mongo") {
        res = await axios.post(`${backend}/mongo-nl-query`, { prompt, schema });
      }

      setSql(res.data.sql || "");
      setResult(res.data.result);
    } catch (err) {
      alert("Error: " + (err.response?.data?.error || err.message));
    }
  };

  const handleManualSubmit = async () => {
    try {
      let res;
      if (dbType === "mysql") {
        res = await axios.post(`${backend}/manual-query`, { sql: manualSQL });
      } else if (dbType === "postgres") {
        res = await axios.post(`${backend}/postgres-query`, { sql: manualSQL });
      } else if (dbType === "mongo") {
        res = await axios.post(`${backend}/mongo-query`, {
          collection,
          query: JSON.parse(mongoQuery)
        });
      }
      setSql(manualSQL);
      setResult(res.data.result);
    } catch (err) {
      alert("Error: " + (err.response?.data?.error || err.message));
    }
  };

  const renderResult = () => {
    if (!result) return null;

    return (
      <table style={styles.table}>
        <thead>
          <tr>
            {(dbType === "mongo"
              ? Object.keys(result[0] || {})
              : result.columns
            ).map((col, i) => (
              <th style={styles.thtd} key={i}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(dbType === "mongo" ? result : result.rows).map((row, i) => (
            <tr key={i}>
              {(dbType === "mongo" ? Object.values(row) : row).map((cell, j) => (
                <td style={styles.thtd} key={j}>
                  {typeof cell === "object" ? JSON.stringify(cell) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>📊 Universal DB Query Interface</h2>

        <label style={styles.label}>Select Database:</label>
        <select value={dbType} onChange={(e) => setDbType(e.target.value)} style={styles.select}>
          <option value="mysql">MySQL</option>
          <option value="postgres">PostgreSQL</option>
          <option value="mongo">MongoDB</option>
        </select>

        <h3 style={styles.sectionTitle}>🧠 Natural Language Prompt</h3>
        <input
          style={styles.input}
          placeholder="Schema (optional)"
          value={schema}
          onChange={(e) => setSchema(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="Prompt (e.g. show all users over 30)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button style={styles.buttonGreen} onClick={handlePromptSubmit}>
          Submit Prompt
        </button>

        <h3 style={styles.sectionTitle}>✍️ Manual Query</h3>
        {dbType === "mongo" ? (
          <>
            <input
              style={styles.input}
              placeholder="Collection"
              value={collection}
              onChange={(e) => setCollection(e.target.value)}
            />
            <input
              style={styles.input}
              placeholder='Query JSON (e.g. {"gpa": {"$gt": 3.0}})'
              value={mongoQuery}
              onChange={(e) => setMongoQuery(e.target.value)}
            />
          </>
        ) : (
          <input
            style={styles.input}
            placeholder="SQL (e.g. SELECT * FROM students)"
            value={manualSQL}
            onChange={(e) => setManualSQL(e.target.value)}
          />
        )}

        <button style={styles.buttonBlue} onClick={handleManualSubmit}>
          Run Manual Query
        </button>

        {sql && dbType !== "mongo" && (
          <>
            <h4 style={styles.sectionTitle}>🧾 SQL Used</h4>
            <pre style={styles.sqlBox}>{sql}</pre>
          </>
        )}

        {result && (
          <>
            <h4 style={styles.sectionTitle}>📋 Result</h4>
            {renderResult()}
          </>
        )}
      </div>
    </div>
  );
}

// --- Style Object ---
const styles = {
  page: {
    background: "linear-gradient(to right, #667eea, #764ba2)",
    minHeight: "100vh",
    padding: 20,
    fontFamily: "'Segoe UI', sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    padding: 30,
    width: "90%",
    maxWidth: 800,
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    backdropFilter: "blur(10px)"
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    color: "#333"
  },
  sectionTitle: {
    marginTop: 30,
    marginBottom: 10,
    color: "#444"
  },
  label: {
    display: "block",
    marginBottom: 6,
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: 8,
    border: "1px solid #ccc",
    marginBottom: 12,
    fontSize: 14
  },
  select: {
    width: "100%",
    padding: "10px",
    borderRadius: 8,
    border: "1px solid #ccc",
    marginBottom: 20,
    fontSize: 14
  },
  buttonGreen: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    marginBottom: 10
  },
  buttonBlue: {
    backgroundColor: "#2196F3",
    color: "white",
    padding: "10px 20px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer"
  },
  sqlBox: {
    backgroundColor: "#f1f1f1",
    padding: 12,
    borderRadius: 8,
    overflowX: "auto",
    fontSize: 13
  },
  table: {
    borderCollapse: "collapse",
    width: "100%",
    marginTop: 10,
    fontSize: 14
  },
  thtd: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "left"
  }
};
