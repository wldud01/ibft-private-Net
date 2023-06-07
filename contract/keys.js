
// WARNING: the keys here are demo purposes ONLY. Please use a tool like Orchestrate or EthSigner for production, rather than hard coding private keys

module.exports = {
    tessera: {
        member1: {
            publicKey: "0x02d8f4081f977a8be2e84ff7fe1a841fb79c7871062bd323c71bf0e3c55035961f"
        },
        member2: {
            publicKey: "0x0251e8057ef16eda17b6801b4fea93247ed0bf4f712054eacbec06b0b339c8d80"
        },
        member3: {
            publicKey: "0x02f63c261585eb8cbc2710032b424a943d1456c70852aad55d65a94e1e4ef2514a"
        },
        member4: {
            publicKey: "0x03a144b623dd1a94e7d26ab82d013bbdc06d78d8ffaaf2f8e4a69dd1063d77d0b9"
        }
    },
    besu: {
        member1: {
            name: "member1",
            url: "http://127.0.0.1:8545",
            wsUrl: "ws://127.0.0.1:30303",
            privateUrl: "",
            nodekey: "0xd8f4081f977a8be2e84ff7fe1a841fb79c7871062bd323c71bf0e3c55035961fb15d4b7b77aa435dfc3a9b927f9c2d79f92e75df2ec5d87c2743cd3716deca30",
            accountAddress: "0x0a39bf163c349663708bedc4b0c4bc79c3e439d9",
            accountPrivateKey: "0x0e56cdfaa5bcbd357a5dcc6e4c6461aa762bf5aa77e54ac252c39ab5a56827c3"
        },
        member2: {
            name: "member2",
            url: "http://127.0.0.1:8546",
            wsUrl: "ws://127.0.0.1:30304",
            privateUrl: "http://127.0.0.1:8546",
            nodekey: "0x51e8057ef16eda17b6801b4fea93247ed0bf4f712054eacbec06b0b339c8d809df23e861158d74c628c657cfee052aafa5ff4c1002fe322af423c811ba5b4bd2",
            accountAddress: "0x7f2fc5b4aa2b5268acdc1446019394c246373489",
            accountPrivateKey: "0x22dce4bc251b631b12d59e464d3e328b68284c9910a3bae9cd852a3c35cfc706"
        },
        member3: {
            name: "member3",
            url: "http://127.0.0.1:8547",
            wsUrl: "ws://127.0.0.1:30305",
            privateUrl: "http://127.0.0.1:8547",
            nodekey: " 0xf63c261585eb8cbc2710032b424a943d1456c70852aad55d65a94e1e4ef2514af97b6b391118bb2c6a97370005564f6516cede28adf75de8ec70c6cfa92bfb20",
            accountAddress: "0xe5677c0695c1e155de69b4a2a613983bbe600765",
            accountPrivateKey: "0xc0a3d8cf34e74e90c8741e37179033df6d217f8024e9f8195ef57b2aedd95a15"
        },
        member4: {
            name: "member4",
            url: "http://127.0.0.1:8548",
            wsUrl: "ws://127.0.0.1:30306",
            privateUrl: "http://127.0.0.1:8548",
            nodekey: " 0xa144b623dd1a94e7d26ab82d013bbdc06d78d8ffaaf2f8e4a69dd1063d77d0b9897140a0a79244a80b6b7d820c32d50d669d2f7a4ff0c960deb0b78b0d2f0445",
            accountAddress: "0xea81a2f975d90c270d015a4a62daf44873a7bfbd",
            accountPrivateKey: "0x0x913ba01b6b98cd8e88047ad23deaf584f0baca7a6a42bae2072ccf3c6dde4aed"
        },
        ethsignerProxy: {
            url: "http://127.0.0.1:18545",
            accountAddress: "9b790656b9ec0db1936ed84b3bea605873558198"
        }
    },
    accounts: {
        "0x0a39bf163c349663708bedc4b0c4bc79c3e439d9": {
            "privateKey": "0x0e56cdfaa5bcbd357a5dcc6e4c6461aa762bf5aa77e54ac252c39ab5a56827c3",
        },
        "0x7f2fc5b4aa2b5268acdc1446019394c246373489": {
            "privateKey": "0x22dce4bc251b631b12d59e464d3e328b68284c9910a3bae9cd852a3c35cfc706",
        },
        "0xe5677c0695c1e155de69b4a2a613983bbe600765": {
            "privateKey": "0xc0a3d8cf34e74e90c8741e37179033df6d217f8024e9f8195ef57b2aedd95a15",
        },
        "0xea81a2f975d90c270d015a4a62daf44873a7bfbd": {
            "privateKey": "0x913ba01b6b98cd8e88047ad23deaf584f0baca7a6a42bae2072ccf3c6dde4aed",
        },
    }
};