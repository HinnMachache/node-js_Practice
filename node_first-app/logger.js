let url = 'sqlite:///site.db'

function log(message) {
    // Send HTTP request
    console.log(message);
}

module.exports.log = log;   // Exporting the log fun to be used out of this module

// console.log(module)