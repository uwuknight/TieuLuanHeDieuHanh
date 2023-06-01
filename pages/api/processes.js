import { exec } from 'child_process';

export default function handler(req, res) {
  // Define a variable to store the output
  let storage = "";

  // Execute the 'tasklist' command
  exec('tasklist', (err, stdout, stderr) => {
    // Check if there was an error executing the command
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    // Split the output into lines
    var lines = stdout.split("\n");
    
    // Process each line starting from the fourth line (skipping headers)
    for (let i = 3; i < lines.length; i++) {
      // Extract relevant information from each line and add it to the storage
      storage += "\n" + tachChuoi(lines[i]);
    }

    // Send the processed data as a JSON response
    res.status(200).json({ data: storage });
  });

  // Helper function to extract relevant information from a string
  function tachChuoi(chuoi) {
    chuoi.trim();
    var values = chuoi.split(/\s+/);
    let temp = "";

    // Concatenate the desired values from the string
    temp += values[0] + "  " + values[1] + "  " + values[2] 
    + "  " + values[3] + "  " + values[4] + values[5];
    return temp;
  }
}