// Create a variable to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, creator, date) {
    const nft = {
        name: name,
        description: description,
        creator: creator,
        date: date
    };
    nftCollection.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Creator: " + nft.creator);
        console.log("Date: " + nft.date);
        console.log("------------------------");
    });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// Call your functions below this line
mintNFT("NFT 1", "This is the first NFT", "Creator 1", "2024-05-29");
mintNFT("NFT 2", "This is the second NFT", "Creator 2", "2024-05-30");

listNFTs();
console.log("Total Supply: " + getTotalSupply());
