export const ABIs = {
  _format: "hh-sol-artifact-1",
  contractName: "PledgePost",
  sourceName: "contracts/PledgePost.sol",
  contractAddress: "0xD62087Bf50dCd6dD87f96E21d1AD040bD9c99589",
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "AccessControlBadConfirmation",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "neededRole",
          type: "bytes32",
        },
      ],
      name: "AccessControlUnauthorizedAccount",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidInitialization",
      type: "error",
    },
    {
      inputs: [],
      name: "NotInitializing",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "roundId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "articleId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Allocated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "author",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "articleId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "ArticleDonated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "author",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "content",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "articleId",
          type: "uint256",
        },
      ],
      name: "ArticlePosted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint64",
          name: "version",
          type: "uint64",
        },
      ],
      name: "Initialized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "author",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "articleId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "roundId",
          type: "uint256",
        },
      ],
      name: "RoundApplied",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "ipoolAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "roundId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "name",
          type: "bytes",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "startDate",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "endDate",
          type: "uint256",
        },
      ],
      name: "RoundCreated",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_roundId",
          type: "uint256",
        },
      ],
      name: "Allocate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_roundId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_author",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_articleId",
          type: "uint256",
        },
      ],
      name: "acceptApplication",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_roundId",
          type: "uint256",
        },
      ],
      name: "activateRound",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_admin",
          type: "address",
        },
      ],
      name: "addAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_roundId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_articleId",
          type: "uint256",
        },
      ],
      name: "applyForRound",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "changeMinimumAmount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_admin",
          type: "address",
        },
      ],
      name: "checkAdminRole",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_sender",
          type: "address",
        },
        {
          internalType: "address",
          name: "_author",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_articleId",
          type: "uint256",
        },
      ],
      name: "checkOwner",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "uid",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "score",
          type: "uint256",
        },
      ],
      name: "checkScore",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "_description",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_startDate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_endDate",
          type: "uint256",
        },
      ],
      name: "createRound",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_roundId",
          type: "uint256",
        },
      ],
      name: "deactivateRound",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_roundId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_author",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_articleId",
          type: "uint256",
        },
      ],
      name: "denyApplication",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_roundId",
          type: "uint256",
        },
      ],
      name: "deposit",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "_author",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_articleId",
          type: "uint256",
        },
      ],
      name: "donateToArticle",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "eas",
      outputs: [
        {
          internalType: "contract IEAS",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_author",
          type: "address",
        },
      ],
      name: "getAllAuthorArticle",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "address payable",
              name: "author",
              type: "address",
            },
            {
              internalType: "string",
              name: "content",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "donationsReceived",
              type: "uint256",
            },
          ],
          internalType: "struct IPledgePost.Article[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_roundId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_author",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_articleId",
          type: "uint256",
        },
      ],
      name: "getAllocation",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_roundId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_author",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_articleId",
          type: "uint256",
        },
      ],
      name: "getApplicationStatus",
      outputs: [
        {
          internalType: "enum IPledgePost.ApplicationStatus",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_roundId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_index",
          type: "uint256",
        },
      ],
      name: "getAppliedArticle",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "address payable",
              name: "author",
              type: "address",
            },
            {
              internalType: "string",
              name: "content",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "donationsReceived",
              type: "uint256",
            },
          ],
          internalType: "struct IPledgePost.Article",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_author",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_articleId",
          type: "uint256",
        },
      ],
      name: "getAppliedRound",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "name",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "description",
              type: "bytes",
            },
            {
              internalType: "address payable",
              name: "poolAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "poolAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "startDate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endDate",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
          ],
          internalType: "struct IPledgePost.Round",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_author",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_articleId",
          type: "uint256",
        },
      ],
      name: "getArticleDonators",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_author",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_articleId",
          type: "uint256",
        },
      ],
      name: "getAuthorArticle",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "address payable",
              name: "author",
              type: "address",
            },
            {
              internalType: "string",
              name: "content",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "donationsReceived",
              type: "uint256",
            },
          ],
          internalType: "struct IPledgePost.Article",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_author",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_articleId",
          type: "uint256",
        },
      ],
      name: "getDonatedAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_roundId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_author",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_articleId",
          type: "uint256",
        },
      ],
      name: "getMatchingAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "uid",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "recipient",
          type: "address",
        },
      ],
      name: "getPassportAttestation",
      outputs: [
        {
          internalType: "uint256",
          name: "score",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleAdmin",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_roundId",
          type: "uint256",
        },
      ],
      name: "getRound",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "name",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "description",
              type: "bytes",
            },
            {
              internalType: "address payable",
              name: "poolAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "poolAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "startDate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endDate",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
          ],
          internalType: "struct IPledgePost.Round",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getRoundLength",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_author",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_articleId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_roundId",
          type: "uint256",
        },
      ],
      name: "getSqrtSumRoundDonation",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "x",
          type: "uint256",
        },
      ],
      name: "getSquareRoot",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_roundId",
          type: "uint256",
        },
      ],
      name: "getTotalSquareSqrtSum",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "hasRole",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_content",
          type: "string",
        },
      ],
      name: "postArticle",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_admin",
          type: "address",
        },
      ],
      name: "removeAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "callerConfirmation",
          type: "address",
        },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_articleId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_content",
          type: "string",
        },
      ],
      name: "updateArticle",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x60806040523480156200001157600080fd5b506200001c62000022565b620000d6565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff1615620000735760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b0390811614620000d35780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b615ec680620000e66000396000f3fe6080604052600436106200029b5760003560e01c806391d14854116200015f578063ce6236ca11620000c5578063e48262f21162000084578063e48262f214620008d3578063e5df05cf14620008f8578063f1625534146200091d578063f1f666751462000942578063f2fde38b1462000967578063fe81a1f7146200098c57600080fd5b8063ce6236ca1462000819578063d547741f1462000830578063d6208fc31462000855578063db76c7101462000889578063e386be2e14620008ae57600080fd5b8063b6082cef116200011e578063b6082cef1462000757578063b6b55f25146200077c578063c0b50cb81462000793578063c4d66de814620007b8578063c6fd06c714620007dd578063ce45ce0f146200080257600080fd5b806391d1485414620006835780639ca4477614620006a8578063a217fddf14620006cd578063a4e60c0f14620006e4578063b283607b146200070957600080fd5b806336568abe116200020557806377eab3e311620001c457806377eab3e314620005665780638120abed146200058b5780638150864d14620005b05780638da5cb5b14620005eb5780638f1327c0146200062a57806391cb292e146200065e57600080fd5b806336568abe14620004ba57806358440d7f14620004df578063704802751462000504578063715018a6146200052957806376c83753146200054157600080fd5b806318c3638d116200025e57806318c3638d14620003be5780631bfddd3514620003e357806320fb90dd1462000408578063248a9ca3146200043c5780632da32fca14620004705780632f2ff15d146200049557600080fd5b806301ffc9a714620002a057806302ed086514620002da578063104dbc11146200033e57806314743e7e14620003725780631785f53c1462000399575b600080fd5b348015620002ad57600080fd5b50620002c5620002bf36600462003331565b620009b1565b60405190151581526020015b60405180910390f35b348015620002e757600080fd5b506200032f620002f93660046200337a565b6001600160a01b0382166000908152600a60209081526040808320848452825280832086845290915290205460ff169392505050565b604051620002d19190620033cb565b3480156200034b57600080fd5b50620003636200035d366004620033f4565b620009e9565b604051620002d19190620034af565b3480156200037f57600080fd5b50620003976200039136600462003515565b62000b24565b005b348015620003a657600080fd5b5062000397620003b8366004620033f4565b62000c88565b348015620003cb57600080fd5b50620002c5620003dd3660046200337a565b62000ca3565b348015620003f057600080fd5b5062000397620004023660046200352f565b62000cbe565b3480156200041557600080fd5b506200042d6200042736600462003552565b6200102d565b604051620002d1919062003581565b3480156200044957600080fd5b50620004616200045b36600462003515565b6200118d565b604051908152602001620002d1565b3480156200047d57600080fd5b50620004616200048f3660046200337a565b620011b0565b348015620004a257600080fd5b5062000397620004b436600462003596565b62001240565b348015620004c757600080fd5b5062000397620004d936600462003596565b62001268565b348015620004ec57600080fd5b5062000397620004fe3660046200337a565b620012a3565b3480156200051157600080fd5b506200039762000523366004620033f4565b62001376565b3480156200053657600080fd5b506200039762001392565b3480156200054e57600080fd5b506200042d620005603660046200352f565b620013aa565b3480156200057357600080fd5b50620003976200058536600462003515565b62001430565b3480156200059857600080fd5b5062000397620005aa36600462003614565b6200143f565b348015620005bd57600080fd5b50600454620005d2906001600160a01b031681565b6040516001600160a01b039091168152602001620002d1565b348015620005f857600080fd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b0316620005d2565b3480156200063757600080fd5b506200064f6200064936600462003515565b62001598565b604051620002d1919062003663565b3480156200066b57600080fd5b50620002c56200067d36600462003728565b62001792565b3480156200069057600080fd5b50620002c5620006a236600462003596565b6200181b565b348015620006b557600080fd5b5062000461620006c73660046200375d565b62001854565b348015620006da57600080fd5b5062000461600081565b348015620006f157600080fd5b506200064f6200070336600462003552565b62001887565b3480156200071657600080fd5b5062000461620007283660046200337a565b6000928352600c602090815260408085206001600160a01b039490941685529281528284209184525290205490565b3480156200076457600080fd5b50620004616200077636600462003596565b62001a52565b620002c56200078d36600462003515565b62001c0d565b348015620007a057600080fd5b5062000461620007b236600462003552565b62001dae565b348015620007c557600080fd5b5062000397620007d7366004620033f4565b62001e2f565b348015620007ea57600080fd5b5062000397620007fc36600462003515565b62001ff0565b620003976200081336600462003552565b62002290565b3480156200082657600080fd5b5060025462000461565b3480156200083d57600080fd5b50620003976200084f36600462003596565b6200267f565b3480156200086257600080fd5b506200087a6200087436600462003552565b620026a1565b604051620002d1919062003795565b3480156200089657600080fd5b5062000461620008a836600462003515565b62002722565b348015620008bb57600080fd5b50620002c5620008cd366004620033f4565b6200272f565b348015620008e057600080fd5b5062000397620008f2366004620037e4565b6200273f565b3480156200090557600080fd5b50620004616200091736600462003515565b62002aa0565b3480156200092a57600080fd5b50620003976200093c36600462003515565b62002b7b565b3480156200094f57600080fd5b5062000397620009613660046200337a565b62002c81565b3480156200097457600080fd5b506200039762000986366004620033f4565b62002d4e565b3480156200099957600080fd5b5062000397620009ab36600462003868565b62002d8f565b60006001600160e01b03198216637965db0b60e01b1480620009e357506301ffc9a760e01b6001600160e01b03198316145b92915050565b6001600160a01b0381166000908152600560209081526040808320805482518185028101850190935280835260609492939192909184015b8282101562000b1957600084815260209081902060408051608081018252600486029092018054835260018101546001600160a01b0316938301939093526002830180549293929184019162000a7790620038ad565b80601f016020809104026020016040519081016040528092919081815260200182805462000aa590620038ad565b801562000af65780601f1062000aca5761010080835404028352916020019162000af6565b820191906000526020600020905b81548152906001019060200180831162000ad857829003601f168201915b505050505081526020016003820154815250508152602001906001019062000a21565b505050509050919050565b62000b32600054336200181b565b62000b5a5760405162461bcd60e51b815260040162000b5190620038e3565b60405180910390fd5b60025481111562000b7f5760405162461bcd60e51b815260040162000b519062003913565b6000811162000ba25760405162461bcd60e51b815260040162000b519062003941565b6000600d62000bb36001846200398e565b8154811062000bc65762000bc6620039a4565b60009182526020909120600990910201600881015490915060ff161562000c305760405162461bcd60e51b815260206004820152601760248201527f526f756e6420697320616c726561647920616374697665000000000000000000604482015260640162000b51565b4281600701541162000c775760405162461bcd60e51b815260206004820152600f60248201526e149bdd5b99081a185cc8195b991959608a1b604482015260640162000b51565b600801805460ff1916600117905550565b62000c9262002eee565b62000ca0600054826200267f565b50565b60008062000cb2858562001a52565b90921115949350505050565b33600090815260056020526040812080548390811062000ce25762000ce2620039a4565b6000918252602090912060049091020160018101549091506001600160a01b0316331462000d535760405162461bcd60e51b815260206004820152601f60248201527f4f6e6c7920617574686f722063616e206170706c7920666f7220726f756e6400604482015260640162000b51565b60025483111562000d785760405162461bcd60e51b815260040162000b519062003913565b6000831162000d9b5760405162461bcd60e51b815260040162000b519062003941565b6000600d62000dac6001866200398e565b8154811062000dbf5762000dbf620039a4565b60009182526020909120600990910201600881015490915060ff1662000e1e5760405162461bcd60e51b8152602060048201526013602482015272526f756e64206973206e6f742061637469766560681b604482015260640162000b51565b4281600701541162000e655760405162461bcd60e51b815260206004820152600f60248201526e149bdd5b99081a185cc8195b991959608a1b604482015260640162000b51565b33600090815260056020526040902054831062000e965760405162461bcd60e51b815260040162000b5190620039ba565b33600090815260096020908152604080832086845290915290208154815560018083015490820180546001600160a01b0319166001600160a01b0392909216919091179055819060028082019062000ef19084018262003a5f565b5060038181019062000f069084018262003a5f565b5060048281015482820180546001600160a01b03199081166001600160a01b0393841617909155600580860154908501556006808601549085015560078086015490850155600894850154938501805460ff909516151560ff19909516949094179093556000888152602094855260408120805460018181018355918352959091208754959093029092019384558582015491840180549093169116179055829060028082019062000fbb9084018262003a5f565b50600391820154910155336000818152600a602090815260408083208784528252808320888452825291829020805460ff1916905581518681529081018790527f811c03f2bbb9360eb64c761297098be1002730230dcb29e79fe32df622aa76f291015b60405180910390a250505050565b6200106260405180608001604052806000815260200160006001600160a01b0316815260200160608152602001600081525090565b6001600160a01b03831660009081526005602052604090208054839081106200108f576200108f620039a4565b9060005260206000209060040201604051806080016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600282018054620010f390620038ad565b80601f01602080910402602001604051908101604052809291908181526020018280546200112190620038ad565b8015620011725780601f10620011465761010080835404028352916020019162001172565b820191906000526020600020905b8154815290600101906020018083116200115457829003601f168201915b50505050508152602001600382015481525050905092915050565b600090815260008051602062005e71833981519152602052604090206001015490565b600080620011be8562002aa0565b905060006002620011d186868962001854565b620011dd919062003c44565b90506000600d620011f06001896200398e565b81548110620012035762001203620039a4565b9060005260206000209060090201905060008383836005015462001228919062003c55565b62001234919062003c6f565b98975050505050505050565b6200124b826200118d565b620012568162002f4c565b62001262838362002f58565b50505050565b6001600160a01b0381163314620012925760405163334bd91960e11b815260040160405180910390fd5b6200129e828262003004565b505050565b620012b1600054336200181b565b620012d05760405162461bcd60e51b815260040162000b5190620038e3565b6001600160a01b0382166000908152600a60209081526040808320848452825280832086845290915281205460ff166002811115620013135762001313620033b5565b14620013335760405162461bcd60e51b815260040162000b519062003c92565b6001600160a01b0382166000908152600a602090815260408083208484528252808320868452909152902080546002919060ff19166001835b0217905550505050565b6200138062002eee565b6200138e6000548262002f58565b5050565b6200139c62002eee565b620013a8600062003085565b565b620013df60405180608001604052806000815260200160006001600160a01b0316815260200160608152602001600081525090565b6000838152600860205260409020546200140d5760405162461bcd60e51b815260040162000b519062003cd3565b60008381526008602052604090208054839081106200108f576200108f620039a4565b6200143a62002eee565b600155565b336000908152600560205260409020805484908110620014635762001463620039a4565b60009182526020909120600490910201600101546001600160a01b03163314620014d05760405162461bcd60e51b815260206004820152601e60248201527f4f6e6c7920617574686f722063616e207570646174652061727469636c650000604482015260640162000b51565b80620015195760405162461bcd60e51b8152602060048201526017602482015276436f6e74656e742063616e6e6f7420626520656d70747960481b604482015260640162000b51565b3360009081526005602052604090205483106200154a5760405162461bcd60e51b815260040162000b5190620039ba565b3360009081526005602052604081208054859081106200156e576200156e620039a4565b600091825260209091206004909102019050600281016200159183858362003d01565b5050505050565b620015a2620032b5565b600d620015b16001846200398e565b81548110620015c457620015c4620039a4565b906000526020600020906009020160405180610120016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016002820180546200162990620038ad565b80601f01602080910402602001604051908101604052809291908181526020018280546200165790620038ad565b8015620016a85780601f106200167c57610100808354040283529160200191620016a8565b820191906000526020600020905b8154815290600101906020018083116200168a57829003601f168201915b50505050508152602001600382018054620016c390620038ad565b80601f0160208091040260200160405190810160405280929190818152602001828054620016f190620038ad565b8015620017425780601f10620017165761010080835404028352916020019162001742565b820191906000526020600020905b8154815290600101906020018083116200172457829003601f168201915b505050918352505060048201546001600160a01b0316602082015260058201546040820152600682015460608201526007820154608082015260089091015460ff16151560a09091015292915050565b6003546040516348e5949760e11b81526001600160a01b03858116600483015284811660248301526044820184905260009216906391cb292e90606401602060405180830381865afa158015620017ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001813919062003ddf565b949350505050565b600091825260008051602062005e71833981519152602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6001600160a01b0383166000908152600b6020908152604080832085845282528083208484529091529020549392505050565b62001891620032b5565b6001600160a01b038084166000908152600960209081526040808320868452825291829020825161012081018452815481526001820154909416918401919091526002810180549192840191620018e890620038ad565b80601f01602080910402602001604051908101604052809291908181526020018280546200191690620038ad565b8015620019675780601f106200193b5761010080835404028352916020019162001967565b820191906000526020600020905b8154815290600101906020018083116200194957829003601f168201915b505050505081526020016003820180546200198290620038ad565b80601f0160208091040260200160405190810160405280929190818152602001828054620019b090620038ad565b801562001a015780601f10620019d55761010080835404028352916020019162001a01565b820191906000526020600020905b815481529060010190602001808311620019e357829003601f168201915b505050918352505060048201546001600160a01b0316602082015260058201546040820152600682015460608201526007820154608082015260089091015460ff16151560a0909101529392505050565b6004805460405163e30bb56360e01b81529182018490526000916001600160a01b039091169063e30bb56390602401602060405180830381865afa15801562001a9f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001ac5919062003ddf565b62001b135760405162461bcd60e51b815260206004820152601860248201527f4174746573746174696f6e206973206e6f742076616c69640000000000000000604482015260640162000b51565b600480546040516328c44a9960e21b81529182018590526000916001600160a01b039091169063a3112a6490602401600060405180830381865afa15801562001b60573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262001b8a919081019062003edf565b9050826001600160a01b03168160c001516001600160a01b03161462001bf35760405162461bcd60e51b815260206004820181905260248201527f496e76616c696420726563697069656e74206f66206174746573746174696f6e604482015260640162000b51565b61012081015162001c0481620030f6565b95945050505050565b600060025482111562001c345760405162461bcd60e51b815260040162000b519062003913565b6000821162001c575760405162461bcd60e51b815260040162000b519062003941565b343331101562001caa5760405162461bcd60e51b815260206004820152601d60248201527f4e6f7420656e6f7567682062616c616e636520746f206465706f736974000000604482015260640162000b51565b6000600d62001cbb6001856200398e565b8154811062001cce5762001cce620039a4565b6000918252602082206009919091020160048101546040519193506001600160a01b03169190829034908381818185875af1925050503d806000811462001d32576040519150601f19603f3d011682016040523d82523d6000602084013e62001d37565b606091505b505090508062001d8a5760405162461bcd60e51b815260206004820152601760248201527f4661696c656420746f206465706f736974204574686572000000000000000000604482015260640162000b51565b3483600501600082825462001da0919062003fe9565b909155509095945050505050565b6001600160a01b038216600090815260056020526040812054821062001de85760405162461bcd60e51b815260040162000b5190620039ba565b6001600160a01b038316600090815260056020526040902080548390811062001e155762001e15620039a4565b906000526020600020906004020160030154905092915050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff1615906001600160401b031660008115801562001e755750825b90506000826001600160401b0316600114801562001e925750303b155b90508115801562001ea1575080155b1562001ec05760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831562001eeb57845460ff60401b1916600160401b1785555b62001ef6866200312d565b62001f0062003142565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775600081905562001f32908762002f58565b506601c6bf526340006001556000600255604051309062001f539062003315565b6001600160a01b039091168152602001604051809103906000f08015801562001f80573d6000803e3d6000fd5b50600380546001600160a01b0319166001600160a01b0392909216919091179055831562001fe857845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b62001ffe600054336200181b565b6200201d5760405162461bcd60e51b815260040162000b5190620038e3565b600254811115620020425760405162461bcd60e51b815260040162000b519062003913565b60008111620020655760405162461bcd60e51b815260040162000b519062003941565b6000620020728262001598565b600083815260086020526040902054909150620020a35760405162461bcd60e51b815260040162000b519062003cd3565b60005b6000838152600860205260409020548110156200129e576000838152600860205260408120805483908110620020e057620020e0620039a4565b6000918252602082206001600490920201908101548154919350620021119187916001600160a01b031690620011b0565b6000868152600c6020908152604080832060018701546001600160a01b031684528252808320865484529091529020819055905080156200227857608084015160018301546040516330cb4c5b60e21b81526001600160a01b03918216600482015260248101849052600092919091169063c32d316c906044016020604051808303816000875af1158015620021ab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620021d1919062003ddf565b905080620022225760405162461bcd60e51b815260206004820152601a60248201527f416c6c6f636174696f6e207472616e73666572206661696c6564000000000000604482015260640162000b51565b60018301548354604080516001600160a01b0390931683526020830191909152810183905286907f0ce65a112a335d2d5fc972d2f7d916ac65b9c552cca921234bb7846404f7cf179060600160405180910390a2505b50508080620022879062003fff565b915050620020a6565b6001600160a01b0382163303620022ea5760405162461bcd60e51b815260206004820152601c60248201527f617574686f722063616e6e6f7420646f6e61746520746f2073656c6600000000604482015260640162000b51565b6001543411620023525760405162461bcd60e51b815260206004820152602c60248201527f646f6e6174696f6e206d7573742062652067726561746572207468616e206d6960448201526b1b9a5b5d5b48185b5bdd5b9d60a21b606482015260840162000b51565b6001600160a01b03821660009081526005602052604090205481106200238c5760405162461bcd60e51b815260040162000b5190620039ba565b6001600160a01b0382166000908152600560205260408120805483908110620023b957620023b9620039a4565b906000526020600020906004020190506000836001600160a01b03163460405160006040518083038185875af1925050503d806000811462002418576040519150601f19603f3d011682016040523d82523d6000602084013e6200241d565b606091505b5050905080620024695760405162461bcd60e51b81526020600482015260166024820152752330b4b632b2103a37903237b730ba329022ba3432b960511b604482015260640162000b51565b6001600160a01b03841660009081526007602090815260408083208684528252822080546001810182559083529082200180546001600160a01b03191633179055600383018054349290620024c090849062003fe9565b90915550506001600160a01b03841660009081526006602052604081208054349290620024ef90849062003fe9565b90915550506001600160a01b03841660009081526009602090815260408083208684529091529020600881015460ff1680156200256f575060016001600160a01b0386166000908152600a6020908152604080832088845282528083208554845290915290205460ff1660028111156200256d576200256d620033b5565b145b15620025c45762002580346200314c565b6001600160a01b0386166000908152600b6020908152604080832088845282528083208554845290915281208054909190620025be90849062003fe9565b90915550505b6040805185815234602082015233916001600160a01b038816917f156f4e4409ddebc945c5614a72c50315673686ffb291cac167b0409de20f291b910160405180910390a360035460405163ab33a3ad60e01b81526001600160a01b039091169063ab33a3ad90620026449033908990899060028a01906004016200401b565b600060405180830381600087803b1580156200265f57600080fd5b505af115801562002674573d6000803e3d6000fd5b505050505050505050565b6200268a826200118d565b620026958162002f4c565b62001262838362003004565b6001600160a01b03821660009081526007602090815260408083208484528252918290208054835181840281018401909452808452606093928301828280156200271557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311620026f6575b5050505050905092915050565b6000620009e3826200314c565b6000620009e3600054836200181b565b6200274d600054336200181b565b6200276c5760405162461bcd60e51b815260040162000b5190620038e3565b808210620027c85760405162461bcd60e51b815260206004820152602260248201527f53746172742064617465206d757374206265206265666f726520656e64206461604482015261746560f01b606482015260840162000b51565b428111620028195760405162461bcd60e51b815260206004820152601e60248201527f456e642064617465206d75737420626520696e20746865206675747572650000604482015260640162000b51565b60006200282987878585620031b1565b9050600060405180610120016040528060025460016200284a919062003fe9565b8152602001336001600160a01b0316815260200189898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250604080516020601f8a018190048102820181019092528881529181019190899089908190840183828082843760009201829052509385525050506001600160a01b038581166020808501919091526040808501849052606085018a90526080850189905260a0909401839052600d8054600181018255935284517fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb56009909402938401908155908501517fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb6840180546001600160a01b03191691909316179091559183015192935083927fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb790910190620029b29082620040d4565b5060608201516003820190620029c99082620040d4565b5060808201516004820180546001600160a01b0319166001600160a01b0390921691909117905560a0820151600582015560c0820151600682015560e08201516007820155610100909101516008909101805460ff191691151591909117905560025433907fc261583b6b27a580502cfc7249730d894b093f3cd80d8f5b6191cc84961841b990849062002a5f90600162003fe9565b8b8b898960405162002a7796959493929190620041bc565b60405180910390a26002805490600062002a918362003fff565b91905055505050505050505050565b600080805b60008481526008602052604090205481101562002b745760008481526008602052604090205462002aea5760405162461bcd60e51b815260040162000b519062003cd3565b600084815260086020526040812080548390811062002b0d5762002b0d620039a4565b600091825260208220600160049092020190810154815491935062002b3f916001600160a01b03909116908862001854565b905062002b4e60028262003c44565b62002b5a908562003fe9565b93505050808062002b6b9062003fff565b91505062002aa5565b5092915050565b62002b89600054336200181b565b62002ba85760405162461bcd60e51b815260040162000b5190620038e3565b60025481111562002bcd5760405162461bcd60e51b815260040162000b519062003913565b6000811162002bf05760405162461bcd60e51b815260040162000b519062003941565b6000600d62002c016001846200398e565b8154811062002c145762002c14620039a4565b60009182526020909120600990910201600881015490915060ff1662002c735760405162461bcd60e51b8152602060048201526013602482015272526f756e64206973206e6f742061637469766560681b604482015260640162000b51565b600801805460ff1916905550565b62002c8f600054336200181b565b62002cae5760405162461bcd60e51b815260040162000b5190620038e3565b6001600160a01b0382166000908152600a60209081526040808320848452825280832086845290915281205460ff16600281111562002cf15762002cf1620033b5565b1462002d115760405162461bcd60e51b815260040162000b519062003c92565b6001600160a01b0382166000908152600a602090815260408083208484528252808320868452909152902080546001919060ff191682806200136c565b62002d5862002eee565b6001600160a01b03811662002d8457604051631e4fbdf760e01b81526000600482015260240162000b51565b62000ca08162003085565b8062002dd85760405162461bcd60e51b8152602060048201526017602482015276436f6e74656e742063616e6e6f7420626520656d70747960481b604482015260640162000b51565b336000818152600560209081526040808320548151608081018352818152808401959095528151601f87018490048402810184018352868152909492918301918790879081908401838280828437600092018290525093855250505060209182018190523381526005825260408082208054600180820183559184529284902085516004909402019283559284015192820180546001600160a01b0319166001600160a01b0390941693909317909255908201519192508291600282019062002ea29082620040d4565b50606082015181600301555050336001600160a01b03167f8287f7cb9ee4a80a03db149d7cce31b9dc4803c6746c41e6131a5da3fbe392fa8585856040516200101f93929190620041fb565b3362002f217f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6001600160a01b031614620013a85760405163118cdaa760e01b815233600482015260240162000b51565b62000ca0813362003224565b600060008051602062005e7183398151915262002f7684846200181b565b62002ff9576000848152602082815260408083206001600160a01b03871684529091529020805460ff1916600117905562002fae3390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050620009e3565b6000915050620009e3565b600060008051602062005e718339815191526200302284846200181b565b1562002ff9576000848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a46001915050620009e3565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6000806000808480602001905181019062003112919062004221565b9194509250905062001c04670de0b6b3a76400008462003c6f565b6200313762003261565b62000ca081620032ab565b620013a862003261565b60008060026200315e84600162003fe9565b6200316a919062003c6f565b90508291505b81811015620031ab579050806002816200318b818662003c6f565b62003197919062003fe9565b620031a3919062003c6f565b905062003170565b50919050565b60008060405180602001620031c69062003323565b6020820181038252601f19601f820116604052509050600086868686604051602001620031f7949392919062004276565b604051602081830303815290604052805190602001209050808251602084016000f5979650505050505050565b6200323082826200181b565b6200138e5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440162000b51565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0054600160401b900460ff16620013a857604051631afcd79f60e31b815260040160405180910390fd5b62002d5862003261565b6040518061012001604052806000815260200160006001600160a01b03168152602001606081526020016060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6118c7806200429183390190565b6103198062005b5883390190565b6000602082840312156200334457600080fd5b81356001600160e01b0319811681146200335d57600080fd5b9392505050565b6001600160a01b038116811462000ca057600080fd5b6000806000606084860312156200339057600080fd5b833592506020840135620033a48162003364565b929592945050506040919091013590565b634e487b7160e01b600052602160045260246000fd5b6020810160038310620033ee57634e487b7160e01b600052602160045260246000fd5b91905290565b6000602082840312156200340757600080fd5b81356200335d8162003364565b60005b838110156200343157818101518382015260200162003417565b50506000910152565b600081518084526200345481602086016020860162003414565b601f01601f19169290920160200192915050565b8051825260018060a01b03602082015116602083015260006040820151608060408501526200349b60808501826200343a565b606093840151949093019390935250919050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156200350857603f19888603018452620034f585835162003468565b94509285019290850190600101620034d6565b5092979650505050505050565b6000602082840312156200352857600080fd5b5035919050565b600080604083850312156200354357600080fd5b50508035926020909101359150565b600080604083850312156200356657600080fd5b8235620035738162003364565b946020939093013593505050565b6020815260006200335d602083018462003468565b60008060408385031215620035aa57600080fd5b823591506020830135620035be8162003364565b809150509250929050565b60008083601f840112620035dc57600080fd5b5081356001600160401b03811115620035f457600080fd5b6020830191508360208285010111156200360d57600080fd5b9250929050565b6000806000604084860312156200362a57600080fd5b8335925060208401356001600160401b038111156200364857600080fd5b6200365686828701620035c9565b9497909650939450505050565b6020815281516020820152600060208301516200368b60408401826001600160a01b03169052565b506040830151610120806060850152620036aa6101408501836200343a565b91506060850151601f19858403016080860152620036c983826200343a565b9250506080850151620036e760a08601826001600160a01b03169052565b5060a085015160c085015260c085015160e085015260e08501516101008181870152808701519150506200371e8286018215159052565b5090949350505050565b6000806000606084860312156200373e57600080fd5b83356200374b8162003364565b92506020840135620033a48162003364565b6000806000606084860312156200377357600080fd5b8335620037808162003364565b95602085013595506040909401359392505050565b6020808252825182820181905260009190848201906040850190845b81811015620037d85783516001600160a01b031683529284019291840191600101620037b1565b50909695505050505050565b60008060008060008060808789031215620037fe57600080fd5b86356001600160401b03808211156200381657600080fd5b620038248a838b01620035c9565b909850965060208901359150808211156200383e57600080fd5b506200384d89828a01620035c9565b979a9699509760408101359660609091013595509350505050565b600080602083850312156200387c57600080fd5b82356001600160401b038111156200389357600080fd5b620038a185828601620035c9565b90969095509350505050565b600181811c90821680620038c257607f821691505b602082108103620031ab57634e487b7160e01b600052602260045260246000fd5b60208082526016908201527521b0b63632b91034b9903737ba1030b71030b236b4b760511b604082015260600190565b602080825260149082015273149bdd5b9908191bd95cc81b9bdd08195e1a5cdd60621b604082015260600190565b60208082526018908201527f526f756e644964203020646f6573206e6f742065786973740000000000000000604082015260600190565b634e487b7160e01b600052601160045260246000fd5b81810381811115620009e357620009e362003978565b634e487b7160e01b600052603260045260246000fd5b602080825260169082015275105c9d1a58db1948191bd95cc81b9bdd08195e1a5cdd60521b604082015260600190565b634e487b7160e01b600052604160045260246000fd5b601f8211156200129e57600081815260208120601f850160051c8101602086101562003a295750805b601f850160051c820191505b8181101562001fe85782815560010162003a35565b600019600383901b1c191660019190911b1790565b81810362003a6b575050565b62003a778254620038ad565b6001600160401b0381111562003a915762003a91620039ea565b62003aa98162003aa28454620038ad565b8462003a00565b6000601f82116001811462003adc576000831562003ac75750848201545b62003ad3848262003a4a565b85555062001591565b600085815260209020601f19841690600086815260209020845b8381101562003b18578286015482556001958601959091019060200162003af6565b508583101562003b375781850154600019600388901b60f8161c191681555b5050505050600190811b01905550565b600181815b8085111562003b8857816000190482111562003b6c5762003b6c62003978565b8085161562003b7a57918102915b93841c939080029062003b4c565b509250929050565b60008262003ba157506001620009e3565b8162003bb057506000620009e3565b816001811462003bc9576002811462003bd45762003bf4565b6001915050620009e3565b60ff84111562003be85762003be862003978565b50506001821b620009e3565b5060208310610133831016604e8410600b841016171562003c19575081810a620009e3565b62003c25838362003b47565b806000190482111562003c3c5762003c3c62003978565b029392505050565b60006200335d60ff84168362003b90565b8082028115828204841417620009e357620009e362003978565b60008262003c8d57634e487b7160e01b600052601260045260246000fd5b500490565b60208082526021908201527f4170706c69636174696f6e20737461747573206973206e6f742050656e64696e6040820152606760f81b606082015260800190565b602080825260149082015273139bc8185c9d1a58db195cc81a5b881c9bdd5b9960621b604082015260600190565b6001600160401b0383111562003d1b5762003d1b620039ea565b62003d338362003d2c8354620038ad565b8362003a00565b6000601f84116001811462003d66576000851562003d515750838201355b62003d5d868262003a4a565b84555062001591565b600083815260209020601f19861690835b8281101562003d99578685013582556020948501946001909201910162003d77565b508682101562003db75760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b8051801515811462003dda57600080fd5b919050565b60006020828403121562003df257600080fd5b6200335d8262003dc9565b60405161014081016001600160401b038111828210171562003e235762003e23620039ea565b60405290565b80516001600160401b038116811462003dda57600080fd5b805162003dda8162003364565b600082601f83011262003e6057600080fd5b81516001600160401b038082111562003e7d5762003e7d620039ea565b604051601f8301601f19908116603f0116810190828211818310171562003ea85762003ea8620039ea565b8160405283815286602085880101111562003ec257600080fd5b62003ed584602083016020890162003414565b9695505050505050565b60006020828403121562003ef257600080fd5b81516001600160401b038082111562003f0a57600080fd5b90830190610140828603121562003f2057600080fd5b62003f2a62003dfd565b825181526020830151602082015262003f466040840162003e29565b604082015262003f596060840162003e29565b606082015262003f6c6080840162003e29565b608082015260a083015160a082015262003f8960c0840162003e41565b60c082015262003f9c60e0840162003e41565b60e082015261010062003fb181850162003dc9565b90820152610120838101518381111562003fca57600080fd5b62003fd88882870162003e4e565b918301919091525095945050505050565b80820180821115620009e357620009e362003978565b60006001820162004014576200401462003978565b5060010190565b6001600160a01b03858116825284166020808301919091526040820184905260806060830152825460009182916200405381620038ad565b80608087015260a06001808416600081146200407857600181146200409357620040c3565b60ff1985168984015283151560051b890183019650620040c3565b896000528560002060005b85811015620040bb5781548b82018601529083019087016200409e565b8a0184019750505b50949b9a5050505050505050505050565b81516001600160401b03811115620040f057620040f0620039ea565b620041018162003aa28454620038ad565b602080601f831160018114620041355760008415620041205750858301515b6200412c858262003a4a565b86555062001fe8565b600085815260208120601f198616915b82811015620041665788860151825594840194600190910190840162004145565b508582101562003b3757939096015160001960f8600387901b161c19169092555050600190811b01905550565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b038716815285602082015260a060408201526000620041e660a08301868862004193565b60608301949094525060800152949350505050565b6040815260006200421160408301858762004193565b9050826020830152949350505050565b6000806000606084860312156200423757600080fd5b83519250602084015163ffffffff811681146200425357600080fd5b604085015190925060ff811681146200426b57600080fd5b809150509250925092565b83858237909201908152602081019190915260400191905056fe60806040523480156200001157600080fd5b50604051620018c7380380620018c7833981016040819052620000349162000128565b806040518060400160405280600781526020016626bcaa37b5b2b760c91b815250604051806040016040528060038152602001624d544b60e81b8152508160009081620000829190620001ff565b506001620000918282620001ff565b5050506001600160a01b038116620000c357604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000ce81620000d6565b5050620002cb565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000602082840312156200013b57600080fd5b81516001600160a01b03811681146200015357600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200018557607f821691505b602082108103620001a657634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001fa57600081815260208120601f850160051c81016020861015620001d55750805b601f850160051c820191505b81811015620001f657828155600101620001e1565b5050505b505050565b81516001600160401b038111156200021b576200021b6200015a565b62000233816200022c845462000170565b84620001ac565b602080601f8311600181146200026b5760008415620002525750858301515b600019600386901b1c1916600185901b178555620001f6565b600085815260208120601f198616915b828110156200029c578886015182559484019460019091019084016200027b565b5085821015620002bb5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6115ec80620002db6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638da5cb5b116100a2578063ab33a3ad11610071578063ab33a3ad14610239578063b88d4fde1461024c578063c87b56dd1461025f578063e985e9c514610272578063f2fde38b1461028557600080fd5b80638da5cb5b146101fa57806391cb292e1461020b57806395d89b411461021e578063a22cb4651461022657600080fd5b806323b872dd116100e957806323b872dd1461019857806342842e0e146101ab5780636352211e146101be57806370a08231146101d1578063715018a6146101f257600080fd5b806301ffc9a71461011b57806306fdde0314610143578063081812fc14610158578063095ea7b314610183575b600080fd5b61012e61012936600461108c565b610298565b60405190151581526020015b60405180910390f35b61014b6102ea565b60405161013a91906110f9565b61016b61016636600461110c565b61037c565b6040516001600160a01b03909116815260200161013a565b610196610191366004611141565b6103a5565b005b6101966101a636600461116b565b6103b4565b6101966101b936600461116b565b610444565b61016b6101cc36600461110c565b610464565b6101e46101df3660046111a7565b61046f565b60405190815260200161013a565b6101966104b7565b6006546001600160a01b031661016b565b61012e61021936600461116b565b6104cb565b61014b610630565b6101966102343660046111c2565b61063f565b6101966102473660046111fe565b61064a565b61019661025a3660046112af565b610828565b61014b61026d36600461110c565b61083f565b61012e61028036600461138b565b6108b3565b6101966102933660046111a7565b6108e1565b60006001600160e01b031982166380ac58cd60e01b14806102c957506001600160e01b03198216635b5e139f60e01b145b806102e457506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102f9906113be565b80601f0160208091040260200160405190810160405280929190818152602001828054610325906113be565b80156103725780601f1061034757610100808354040283529160200191610372565b820191906000526020600020905b81548152906001019060200180831161035557829003601f168201915b5050505050905090565b60006103878261091f565b506000828152600460205260409020546001600160a01b03166102e4565b6103b0828233610958565b5050565b6001600160a01b0382166103e357604051633250574960e11b8152600060048201526024015b60405180910390fd5b60006103f0838333610965565b9050836001600160a01b0316816001600160a01b03161461043e576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016103da565b50505050565b61045f83838360405180602001604052806000815250610828565b505050565b60006102e48261091f565b60006001600160a01b03821661049b576040516322718ad960e21b8152600060048201526024016103da565b506001600160a01b031660009081526003602052604090205490565b6104bf610a5e565b6104c96000610a8b565b565b6000805b600754811015610623576000818152600860209081526040808320815160808101835281546001600160a01b0390811682526001830154169381019390935260028101549183019190915260038101805460608401919061052f906113be565b80601f016020809104026020016040519081016040528092919081815260200182805461055b906113be565b80156105a85780601f1061057d576101008083540402835291602001916105a8565b820191906000526020600020905b81548152906001019060200180831161058b57829003601f168201915b5050505050815250509050846001600160a01b031681602001516001600160a01b03161480156105db5750838160400151145b80156106005750856001600160a01b03166105f583610464565b6001600160a01b0316145b1561061057600192505050610629565b508061061b816113f8565b9150506104cf565b50600090505b9392505050565b6060600180546102f9906113be565b6103b0338383610add565b610652610a5e565b6001600160a01b0385166106a15760405162461bcd60e51b81526020600482015260166024820152754d696e7465722061646472657373206973207a65726f60501b60448201526064016103da565b6001600160a01b0384166106f05760405162461bcd60e51b8152602060048201526016602482015275417574686f722061646472657373206973207a65726f60501b60448201526064016103da565b806107345760405162461bcd60e51b8152602060048201526014602482015273436f6e74656e742055524920697320656d70747960601b60448201526064016103da565b6007805460009182610745836113f8565b9190505590506107558682610b7c565b6040518060800160405280876001600160a01b03168152602001866001600160a01b0316815260200185815260200184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093909452505083815260086020908152604091829020845181546001600160a01b03199081166001600160a01b03928316178355928601516001830180549094169116179091559083015160028201556060830151909150600382019061081d908261146d565b505050505050505050565b6108338484846103b4565b61043e84848484610b96565b606061084a8261091f565b50600061086260408051602081019091526000815290565b905060008151116108825760405180602001604052806000815250610629565b8061088c84610cbf565b60405160200161089d92919061152d565b6040516020818303038152906040529392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6108e9610a5e565b6001600160a01b03811661091357604051631e4fbdf760e01b8152600060048201526024016103da565b61091c81610a8b565b50565b6000818152600260205260408120546001600160a01b0316806102e457604051637e27328960e01b8152600481018490526024016103da565b61045f8383836001610d52565b6000828152600260205260408120546001600160a01b039081169083161561099257610992818486610e58565b6001600160a01b038116156109d0576109af600085600080610d52565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b038516156109ff576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b6006546001600160a01b031633146104c95760405163118cdaa760e01b81523360048201526024016103da565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610b0f57604051630b61174360e31b81526001600160a01b03831660048201526024016103da565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6103b0828260405180602001604052806000815250610ebc565b6001600160a01b0383163b1561043e57604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610bd890339088908790879060040161155c565b6020604051808303816000875af1925050508015610c13575060408051601f3d908101601f19168201909252610c1091810190611599565b60015b610c7c573d808015610c41576040519150601f19603f3d011682016040523d82523d6000602084013e610c46565b606091505b508051600003610c7457604051633250574960e11b81526001600160a01b03851660048201526024016103da565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14610cb857604051633250574960e11b81526001600160a01b03851660048201526024016103da565b5050505050565b60606000610ccc83610ed3565b600101905060008167ffffffffffffffff811115610cec57610cec611299565b6040519080825280601f01601f191660200182016040528015610d16576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610d2057509392505050565b8080610d6657506001600160a01b03821615155b15610e28576000610d768461091f565b90506001600160a01b03831615801590610da25750826001600160a01b0316816001600160a01b031614155b8015610db55750610db381846108b3565b155b15610dde5760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016103da565b8115610e265783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610e63838383610fab565b61045f576001600160a01b038316610e9157604051637e27328960e01b8152600481018290526024016103da565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016103da565b610ec68383611011565b61045f6000848484610b96565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610f125772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610f3e576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610f5c57662386f26fc10000830492506010015b6305f5e1008310610f74576305f5e100830492506008015b6127108310610f8857612710830492506004015b60648310610f9a576064830492506002015b600a83106102e45760010192915050565b60006001600160a01b038316158015906110095750826001600160a01b0316846001600160a01b03161480610fe55750610fe584846108b3565b8061100957506000828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160a01b03821661103b57604051633250574960e11b8152600060048201526024016103da565b600061104983836000610965565b90506001600160a01b0381161561045f576040516339e3563760e11b8152600060048201526024016103da565b6001600160e01b03198116811461091c57600080fd5b60006020828403121561109e57600080fd5b813561062981611076565b60005b838110156110c45781810151838201526020016110ac565b50506000910152565b600081518084526110e58160208601602086016110a9565b601f01601f19169290920160200192915050565b60208152600061062960208301846110cd565b60006020828403121561111e57600080fd5b5035919050565b80356001600160a01b038116811461113c57600080fd5b919050565b6000806040838503121561115457600080fd5b61115d83611125565b946020939093013593505050565b60008060006060848603121561118057600080fd5b61118984611125565b925061119760208501611125565b9150604084013590509250925092565b6000602082840312156111b957600080fd5b61062982611125565b600080604083850312156111d557600080fd5b6111de83611125565b9150602083013580151581146111f357600080fd5b809150509250929050565b60008060008060006080868803121561121657600080fd5b61121f86611125565b945061122d60208701611125565b935060408601359250606086013567ffffffffffffffff8082111561125157600080fd5b818801915088601f83011261126557600080fd5b81358181111561127457600080fd5b89602082850101111561128657600080fd5b9699959850939650602001949392505050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156112c557600080fd5b6112ce85611125565b93506112dc60208601611125565b925060408501359150606085013567ffffffffffffffff8082111561130057600080fd5b818701915087601f83011261131457600080fd5b81358181111561132657611326611299565b604051601f8201601f19908116603f0116810190838211818310171561134e5761134e611299565b816040528281528a602084870101111561136757600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561139e57600080fd5b6113a783611125565b91506113b560208401611125565b90509250929050565b600181811c908216806113d257607f821691505b6020821081036113f257634e487b7160e01b600052602260045260246000fd5b50919050565b60006001820161141857634e487b7160e01b600052601160045260246000fd5b5060010190565b601f82111561045f57600081815260208120601f850160051c810160208610156114465750805b601f850160051c820191505b8181101561146557828155600101611452565b505050505050565b815167ffffffffffffffff81111561148757611487611299565b61149b8161149584546113be565b8461141f565b602080601f8311600181146114d057600084156114b85750858301515b600019600386901b1c1916600185901b178555611465565b600085815260208120601f198616915b828110156114ff578886015182559484019460019091019084016114e0565b508582101561151d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000835161153f8184602088016110a9565b8351908301906115538183602088016110a9565b01949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061158f908301846110cd565b9695505050505050565b6000602082840312156115ab57600080fd5b81516106298161107656fea2646970667358221220150e3cf140635b4a78c366688c66d96a411c5bccd274e75522cb9a698aec3cde64736f6c63430008140033608060405234801561001057600080fd5b50600080546001600160a01b031916331790556102e7806100326000396000f3fe6080604052600436106100385760003560e01c806312065fe0146100445780638da5cb5b14610064578063c32d316c1461009c57600080fd5b3661003f57005b600080fd5b34801561005057600080fd5b506040514781526020015b60405180910390f35b34801561007057600080fd5b50600054610084906001600160a01b031681565b6040516001600160a01b03909116815260200161005b565b3480156100a857600080fd5b506100bc6100b7366004610279565b6100cc565b604051901515815260200161005b565b600080546001600160a01b031633146101375760405162461bcd60e51b815260206004820152602260248201527f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f604482015261371760f11b60648201526084015b60405180910390fd5b814710156101875760405162461bcd60e51b815260206004820152601760248201527f4e6f7420656e6f75676820706f6f6c2062616c616e6365000000000000000000604482015260640161012e565b6001600160a01b0383166101cf5760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b604482015260640161012e565b6000836001600160a01b03168360405160006040518083038185875af1925050503d806000811461021c576040519150601f19603f3d011682016040523d82523d6000602084013e610221565b606091505b50509050806102725760405162461bcd60e51b815260206004820152601760248201527f4661696c656420746f20706f6f6c207472616e73666572000000000000000000604482015260640161012e565b9392505050565b6000806040838503121561028c57600080fd5b82356001600160a01b03811681146102a357600080fd5b94602093909301359350505056fea26469706673582212200d793183ea33d9694ae902b33b3dafa3ae4e51e4d03075aac0b376b78cf21f6464736f6c6343000814003302dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800a264697066735822122019faa9fc40fa3671422844cecda6657914eac21f6f77b14cf737ca105a5613e464736f6c63430008140033",
  deployedBytecode:
    "0x6080604052600436106200029b5760003560e01c806391d14854116200015f578063ce6236ca11620000c5578063e48262f21162000084578063e48262f214620008d3578063e5df05cf14620008f8578063f1625534146200091d578063f1f666751462000942578063f2fde38b1462000967578063fe81a1f7146200098c57600080fd5b8063ce6236ca1462000819578063d547741f1462000830578063d6208fc31462000855578063db76c7101462000889578063e386be2e14620008ae57600080fd5b8063b6082cef116200011e578063b6082cef1462000757578063b6b55f25146200077c578063c0b50cb81462000793578063c4d66de814620007b8578063c6fd06c714620007dd578063ce45ce0f146200080257600080fd5b806391d1485414620006835780639ca4477614620006a8578063a217fddf14620006cd578063a4e60c0f14620006e4578063b283607b146200070957600080fd5b806336568abe116200020557806377eab3e311620001c457806377eab3e314620005665780638120abed146200058b5780638150864d14620005b05780638da5cb5b14620005eb5780638f1327c0146200062a57806391cb292e146200065e57600080fd5b806336568abe14620004ba57806358440d7f14620004df578063704802751462000504578063715018a6146200052957806376c83753146200054157600080fd5b806318c3638d116200025e57806318c3638d14620003be5780631bfddd3514620003e357806320fb90dd1462000408578063248a9ca3146200043c5780632da32fca14620004705780632f2ff15d146200049557600080fd5b806301ffc9a714620002a057806302ed086514620002da578063104dbc11146200033e57806314743e7e14620003725780631785f53c1462000399575b600080fd5b348015620002ad57600080fd5b50620002c5620002bf36600462003331565b620009b1565b60405190151581526020015b60405180910390f35b348015620002e757600080fd5b506200032f620002f93660046200337a565b6001600160a01b0382166000908152600a60209081526040808320848452825280832086845290915290205460ff169392505050565b604051620002d19190620033cb565b3480156200034b57600080fd5b50620003636200035d366004620033f4565b620009e9565b604051620002d19190620034af565b3480156200037f57600080fd5b50620003976200039136600462003515565b62000b24565b005b348015620003a657600080fd5b5062000397620003b8366004620033f4565b62000c88565b348015620003cb57600080fd5b50620002c5620003dd3660046200337a565b62000ca3565b348015620003f057600080fd5b5062000397620004023660046200352f565b62000cbe565b3480156200041557600080fd5b506200042d6200042736600462003552565b6200102d565b604051620002d1919062003581565b3480156200044957600080fd5b50620004616200045b36600462003515565b6200118d565b604051908152602001620002d1565b3480156200047d57600080fd5b50620004616200048f3660046200337a565b620011b0565b348015620004a257600080fd5b5062000397620004b436600462003596565b62001240565b348015620004c757600080fd5b5062000397620004d936600462003596565b62001268565b348015620004ec57600080fd5b5062000397620004fe3660046200337a565b620012a3565b3480156200051157600080fd5b506200039762000523366004620033f4565b62001376565b3480156200053657600080fd5b506200039762001392565b3480156200054e57600080fd5b506200042d620005603660046200352f565b620013aa565b3480156200057357600080fd5b50620003976200058536600462003515565b62001430565b3480156200059857600080fd5b5062000397620005aa36600462003614565b6200143f565b348015620005bd57600080fd5b50600454620005d2906001600160a01b031681565b6040516001600160a01b039091168152602001620002d1565b348015620005f857600080fd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b0316620005d2565b3480156200063757600080fd5b506200064f6200064936600462003515565b62001598565b604051620002d1919062003663565b3480156200066b57600080fd5b50620002c56200067d36600462003728565b62001792565b3480156200069057600080fd5b50620002c5620006a236600462003596565b6200181b565b348015620006b557600080fd5b5062000461620006c73660046200375d565b62001854565b348015620006da57600080fd5b5062000461600081565b348015620006f157600080fd5b506200064f6200070336600462003552565b62001887565b3480156200071657600080fd5b5062000461620007283660046200337a565b6000928352600c602090815260408085206001600160a01b039490941685529281528284209184525290205490565b3480156200076457600080fd5b50620004616200077636600462003596565b62001a52565b620002c56200078d36600462003515565b62001c0d565b348015620007a057600080fd5b5062000461620007b236600462003552565b62001dae565b348015620007c557600080fd5b5062000397620007d7366004620033f4565b62001e2f565b348015620007ea57600080fd5b5062000397620007fc36600462003515565b62001ff0565b620003976200081336600462003552565b62002290565b3480156200082657600080fd5b5060025462000461565b3480156200083d57600080fd5b50620003976200084f36600462003596565b6200267f565b3480156200086257600080fd5b506200087a6200087436600462003552565b620026a1565b604051620002d1919062003795565b3480156200089657600080fd5b5062000461620008a836600462003515565b62002722565b348015620008bb57600080fd5b50620002c5620008cd366004620033f4565b6200272f565b348015620008e057600080fd5b5062000397620008f2366004620037e4565b6200273f565b3480156200090557600080fd5b50620004616200091736600462003515565b62002aa0565b3480156200092a57600080fd5b50620003976200093c36600462003515565b62002b7b565b3480156200094f57600080fd5b5062000397620009613660046200337a565b62002c81565b3480156200097457600080fd5b506200039762000986366004620033f4565b62002d4e565b3480156200099957600080fd5b5062000397620009ab36600462003868565b62002d8f565b60006001600160e01b03198216637965db0b60e01b1480620009e357506301ffc9a760e01b6001600160e01b03198316145b92915050565b6001600160a01b0381166000908152600560209081526040808320805482518185028101850190935280835260609492939192909184015b8282101562000b1957600084815260209081902060408051608081018252600486029092018054835260018101546001600160a01b0316938301939093526002830180549293929184019162000a7790620038ad565b80601f016020809104026020016040519081016040528092919081815260200182805462000aa590620038ad565b801562000af65780601f1062000aca5761010080835404028352916020019162000af6565b820191906000526020600020905b81548152906001019060200180831162000ad857829003601f168201915b505050505081526020016003820154815250508152602001906001019062000a21565b505050509050919050565b62000b32600054336200181b565b62000b5a5760405162461bcd60e51b815260040162000b5190620038e3565b60405180910390fd5b60025481111562000b7f5760405162461bcd60e51b815260040162000b519062003913565b6000811162000ba25760405162461bcd60e51b815260040162000b519062003941565b6000600d62000bb36001846200398e565b8154811062000bc65762000bc6620039a4565b60009182526020909120600990910201600881015490915060ff161562000c305760405162461bcd60e51b815260206004820152601760248201527f526f756e6420697320616c726561647920616374697665000000000000000000604482015260640162000b51565b4281600701541162000c775760405162461bcd60e51b815260206004820152600f60248201526e149bdd5b99081a185cc8195b991959608a1b604482015260640162000b51565b600801805460ff1916600117905550565b62000c9262002eee565b62000ca0600054826200267f565b50565b60008062000cb2858562001a52565b90921115949350505050565b33600090815260056020526040812080548390811062000ce25762000ce2620039a4565b6000918252602090912060049091020160018101549091506001600160a01b0316331462000d535760405162461bcd60e51b815260206004820152601f60248201527f4f6e6c7920617574686f722063616e206170706c7920666f7220726f756e6400604482015260640162000b51565b60025483111562000d785760405162461bcd60e51b815260040162000b519062003913565b6000831162000d9b5760405162461bcd60e51b815260040162000b519062003941565b6000600d62000dac6001866200398e565b8154811062000dbf5762000dbf620039a4565b60009182526020909120600990910201600881015490915060ff1662000e1e5760405162461bcd60e51b8152602060048201526013602482015272526f756e64206973206e6f742061637469766560681b604482015260640162000b51565b4281600701541162000e655760405162461bcd60e51b815260206004820152600f60248201526e149bdd5b99081a185cc8195b991959608a1b604482015260640162000b51565b33600090815260056020526040902054831062000e965760405162461bcd60e51b815260040162000b5190620039ba565b33600090815260096020908152604080832086845290915290208154815560018083015490820180546001600160a01b0319166001600160a01b0392909216919091179055819060028082019062000ef19084018262003a5f565b5060038181019062000f069084018262003a5f565b5060048281015482820180546001600160a01b03199081166001600160a01b0393841617909155600580860154908501556006808601549085015560078086015490850155600894850154938501805460ff909516151560ff19909516949094179093556000888152602094855260408120805460018181018355918352959091208754959093029092019384558582015491840180549093169116179055829060028082019062000fbb9084018262003a5f565b50600391820154910155336000818152600a602090815260408083208784528252808320888452825291829020805460ff1916905581518681529081018790527f811c03f2bbb9360eb64c761297098be1002730230dcb29e79fe32df622aa76f291015b60405180910390a250505050565b6200106260405180608001604052806000815260200160006001600160a01b0316815260200160608152602001600081525090565b6001600160a01b03831660009081526005602052604090208054839081106200108f576200108f620039a4565b9060005260206000209060040201604051806080016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600282018054620010f390620038ad565b80601f01602080910402602001604051908101604052809291908181526020018280546200112190620038ad565b8015620011725780601f10620011465761010080835404028352916020019162001172565b820191906000526020600020905b8154815290600101906020018083116200115457829003601f168201915b50505050508152602001600382015481525050905092915050565b600090815260008051602062005e71833981519152602052604090206001015490565b600080620011be8562002aa0565b905060006002620011d186868962001854565b620011dd919062003c44565b90506000600d620011f06001896200398e565b81548110620012035762001203620039a4565b9060005260206000209060090201905060008383836005015462001228919062003c55565b62001234919062003c6f565b98975050505050505050565b6200124b826200118d565b620012568162002f4c565b62001262838362002f58565b50505050565b6001600160a01b0381163314620012925760405163334bd91960e11b815260040160405180910390fd5b6200129e828262003004565b505050565b620012b1600054336200181b565b620012d05760405162461bcd60e51b815260040162000b5190620038e3565b6001600160a01b0382166000908152600a60209081526040808320848452825280832086845290915281205460ff166002811115620013135762001313620033b5565b14620013335760405162461bcd60e51b815260040162000b519062003c92565b6001600160a01b0382166000908152600a602090815260408083208484528252808320868452909152902080546002919060ff19166001835b0217905550505050565b6200138062002eee565b6200138e6000548262002f58565b5050565b6200139c62002eee565b620013a8600062003085565b565b620013df60405180608001604052806000815260200160006001600160a01b0316815260200160608152602001600081525090565b6000838152600860205260409020546200140d5760405162461bcd60e51b815260040162000b519062003cd3565b60008381526008602052604090208054839081106200108f576200108f620039a4565b6200143a62002eee565b600155565b336000908152600560205260409020805484908110620014635762001463620039a4565b60009182526020909120600490910201600101546001600160a01b03163314620014d05760405162461bcd60e51b815260206004820152601e60248201527f4f6e6c7920617574686f722063616e207570646174652061727469636c650000604482015260640162000b51565b80620015195760405162461bcd60e51b8152602060048201526017602482015276436f6e74656e742063616e6e6f7420626520656d70747960481b604482015260640162000b51565b3360009081526005602052604090205483106200154a5760405162461bcd60e51b815260040162000b5190620039ba565b3360009081526005602052604081208054859081106200156e576200156e620039a4565b600091825260209091206004909102019050600281016200159183858362003d01565b5050505050565b620015a2620032b5565b600d620015b16001846200398e565b81548110620015c457620015c4620039a4565b906000526020600020906009020160405180610120016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016002820180546200162990620038ad565b80601f01602080910402602001604051908101604052809291908181526020018280546200165790620038ad565b8015620016a85780601f106200167c57610100808354040283529160200191620016a8565b820191906000526020600020905b8154815290600101906020018083116200168a57829003601f168201915b50505050508152602001600382018054620016c390620038ad565b80601f0160208091040260200160405190810160405280929190818152602001828054620016f190620038ad565b8015620017425780601f10620017165761010080835404028352916020019162001742565b820191906000526020600020905b8154815290600101906020018083116200172457829003601f168201915b505050918352505060048201546001600160a01b0316602082015260058201546040820152600682015460608201526007820154608082015260089091015460ff16151560a09091015292915050565b6003546040516348e5949760e11b81526001600160a01b03858116600483015284811660248301526044820184905260009216906391cb292e90606401602060405180830381865afa158015620017ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001813919062003ddf565b949350505050565b600091825260008051602062005e71833981519152602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6001600160a01b0383166000908152600b6020908152604080832085845282528083208484529091529020549392505050565b62001891620032b5565b6001600160a01b038084166000908152600960209081526040808320868452825291829020825161012081018452815481526001820154909416918401919091526002810180549192840191620018e890620038ad565b80601f01602080910402602001604051908101604052809291908181526020018280546200191690620038ad565b8015620019675780601f106200193b5761010080835404028352916020019162001967565b820191906000526020600020905b8154815290600101906020018083116200194957829003601f168201915b505050505081526020016003820180546200198290620038ad565b80601f0160208091040260200160405190810160405280929190818152602001828054620019b090620038ad565b801562001a015780601f10620019d55761010080835404028352916020019162001a01565b820191906000526020600020905b815481529060010190602001808311620019e357829003601f168201915b505050918352505060048201546001600160a01b0316602082015260058201546040820152600682015460608201526007820154608082015260089091015460ff16151560a0909101529392505050565b6004805460405163e30bb56360e01b81529182018490526000916001600160a01b039091169063e30bb56390602401602060405180830381865afa15801562001a9f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001ac5919062003ddf565b62001b135760405162461bcd60e51b815260206004820152601860248201527f4174746573746174696f6e206973206e6f742076616c69640000000000000000604482015260640162000b51565b600480546040516328c44a9960e21b81529182018590526000916001600160a01b039091169063a3112a6490602401600060405180830381865afa15801562001b60573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262001b8a919081019062003edf565b9050826001600160a01b03168160c001516001600160a01b03161462001bf35760405162461bcd60e51b815260206004820181905260248201527f496e76616c696420726563697069656e74206f66206174746573746174696f6e604482015260640162000b51565b61012081015162001c0481620030f6565b95945050505050565b600060025482111562001c345760405162461bcd60e51b815260040162000b519062003913565b6000821162001c575760405162461bcd60e51b815260040162000b519062003941565b343331101562001caa5760405162461bcd60e51b815260206004820152601d60248201527f4e6f7420656e6f7567682062616c616e636520746f206465706f736974000000604482015260640162000b51565b6000600d62001cbb6001856200398e565b8154811062001cce5762001cce620039a4565b6000918252602082206009919091020160048101546040519193506001600160a01b03169190829034908381818185875af1925050503d806000811462001d32576040519150601f19603f3d011682016040523d82523d6000602084013e62001d37565b606091505b505090508062001d8a5760405162461bcd60e51b815260206004820152601760248201527f4661696c656420746f206465706f736974204574686572000000000000000000604482015260640162000b51565b3483600501600082825462001da0919062003fe9565b909155509095945050505050565b6001600160a01b038216600090815260056020526040812054821062001de85760405162461bcd60e51b815260040162000b5190620039ba565b6001600160a01b038316600090815260056020526040902080548390811062001e155762001e15620039a4565b906000526020600020906004020160030154905092915050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff1615906001600160401b031660008115801562001e755750825b90506000826001600160401b0316600114801562001e925750303b155b90508115801562001ea1575080155b1562001ec05760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831562001eeb57845460ff60401b1916600160401b1785555b62001ef6866200312d565b62001f0062003142565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775600081905562001f32908762002f58565b506601c6bf526340006001556000600255604051309062001f539062003315565b6001600160a01b039091168152602001604051809103906000f08015801562001f80573d6000803e3d6000fd5b50600380546001600160a01b0319166001600160a01b0392909216919091179055831562001fe857845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b62001ffe600054336200181b565b6200201d5760405162461bcd60e51b815260040162000b5190620038e3565b600254811115620020425760405162461bcd60e51b815260040162000b519062003913565b60008111620020655760405162461bcd60e51b815260040162000b519062003941565b6000620020728262001598565b600083815260086020526040902054909150620020a35760405162461bcd60e51b815260040162000b519062003cd3565b60005b6000838152600860205260409020548110156200129e576000838152600860205260408120805483908110620020e057620020e0620039a4565b6000918252602082206001600490920201908101548154919350620021119187916001600160a01b031690620011b0565b6000868152600c6020908152604080832060018701546001600160a01b031684528252808320865484529091529020819055905080156200227857608084015160018301546040516330cb4c5b60e21b81526001600160a01b03918216600482015260248101849052600092919091169063c32d316c906044016020604051808303816000875af1158015620021ab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620021d1919062003ddf565b905080620022225760405162461bcd60e51b815260206004820152601a60248201527f416c6c6f636174696f6e207472616e73666572206661696c6564000000000000604482015260640162000b51565b60018301548354604080516001600160a01b0390931683526020830191909152810183905286907f0ce65a112a335d2d5fc972d2f7d916ac65b9c552cca921234bb7846404f7cf179060600160405180910390a2505b50508080620022879062003fff565b915050620020a6565b6001600160a01b0382163303620022ea5760405162461bcd60e51b815260206004820152601c60248201527f617574686f722063616e6e6f7420646f6e61746520746f2073656c6600000000604482015260640162000b51565b6001543411620023525760405162461bcd60e51b815260206004820152602c60248201527f646f6e6174696f6e206d7573742062652067726561746572207468616e206d6960448201526b1b9a5b5d5b48185b5bdd5b9d60a21b606482015260840162000b51565b6001600160a01b03821660009081526005602052604090205481106200238c5760405162461bcd60e51b815260040162000b5190620039ba565b6001600160a01b0382166000908152600560205260408120805483908110620023b957620023b9620039a4565b906000526020600020906004020190506000836001600160a01b03163460405160006040518083038185875af1925050503d806000811462002418576040519150601f19603f3d011682016040523d82523d6000602084013e6200241d565b606091505b5050905080620024695760405162461bcd60e51b81526020600482015260166024820152752330b4b632b2103a37903237b730ba329022ba3432b960511b604482015260640162000b51565b6001600160a01b03841660009081526007602090815260408083208684528252822080546001810182559083529082200180546001600160a01b03191633179055600383018054349290620024c090849062003fe9565b90915550506001600160a01b03841660009081526006602052604081208054349290620024ef90849062003fe9565b90915550506001600160a01b03841660009081526009602090815260408083208684529091529020600881015460ff1680156200256f575060016001600160a01b0386166000908152600a6020908152604080832088845282528083208554845290915290205460ff1660028111156200256d576200256d620033b5565b145b15620025c45762002580346200314c565b6001600160a01b0386166000908152600b6020908152604080832088845282528083208554845290915281208054909190620025be90849062003fe9565b90915550505b6040805185815234602082015233916001600160a01b038816917f156f4e4409ddebc945c5614a72c50315673686ffb291cac167b0409de20f291b910160405180910390a360035460405163ab33a3ad60e01b81526001600160a01b039091169063ab33a3ad90620026449033908990899060028a01906004016200401b565b600060405180830381600087803b1580156200265f57600080fd5b505af115801562002674573d6000803e3d6000fd5b505050505050505050565b6200268a826200118d565b620026958162002f4c565b62001262838362003004565b6001600160a01b03821660009081526007602090815260408083208484528252918290208054835181840281018401909452808452606093928301828280156200271557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311620026f6575b5050505050905092915050565b6000620009e3826200314c565b6000620009e3600054836200181b565b6200274d600054336200181b565b6200276c5760405162461bcd60e51b815260040162000b5190620038e3565b808210620027c85760405162461bcd60e51b815260206004820152602260248201527f53746172742064617465206d757374206265206265666f726520656e64206461604482015261746560f01b606482015260840162000b51565b428111620028195760405162461bcd60e51b815260206004820152601e60248201527f456e642064617465206d75737420626520696e20746865206675747572650000604482015260640162000b51565b60006200282987878585620031b1565b9050600060405180610120016040528060025460016200284a919062003fe9565b8152602001336001600160a01b0316815260200189898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250604080516020601f8a018190048102820181019092528881529181019190899089908190840183828082843760009201829052509385525050506001600160a01b038581166020808501919091526040808501849052606085018a90526080850189905260a0909401839052600d8054600181018255935284517fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb56009909402938401908155908501517fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb6840180546001600160a01b03191691909316179091559183015192935083927fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb790910190620029b29082620040d4565b5060608201516003820190620029c99082620040d4565b5060808201516004820180546001600160a01b0319166001600160a01b0390921691909117905560a0820151600582015560c0820151600682015560e08201516007820155610100909101516008909101805460ff191691151591909117905560025433907fc261583b6b27a580502cfc7249730d894b093f3cd80d8f5b6191cc84961841b990849062002a5f90600162003fe9565b8b8b898960405162002a7796959493929190620041bc565b60405180910390a26002805490600062002a918362003fff565b91905055505050505050505050565b600080805b60008481526008602052604090205481101562002b745760008481526008602052604090205462002aea5760405162461bcd60e51b815260040162000b519062003cd3565b600084815260086020526040812080548390811062002b0d5762002b0d620039a4565b600091825260208220600160049092020190810154815491935062002b3f916001600160a01b03909116908862001854565b905062002b4e60028262003c44565b62002b5a908562003fe9565b93505050808062002b6b9062003fff565b91505062002aa5565b5092915050565b62002b89600054336200181b565b62002ba85760405162461bcd60e51b815260040162000b5190620038e3565b60025481111562002bcd5760405162461bcd60e51b815260040162000b519062003913565b6000811162002bf05760405162461bcd60e51b815260040162000b519062003941565b6000600d62002c016001846200398e565b8154811062002c145762002c14620039a4565b60009182526020909120600990910201600881015490915060ff1662002c735760405162461bcd60e51b8152602060048201526013602482015272526f756e64206973206e6f742061637469766560681b604482015260640162000b51565b600801805460ff1916905550565b62002c8f600054336200181b565b62002cae5760405162461bcd60e51b815260040162000b5190620038e3565b6001600160a01b0382166000908152600a60209081526040808320848452825280832086845290915281205460ff16600281111562002cf15762002cf1620033b5565b1462002d115760405162461bcd60e51b815260040162000b519062003c92565b6001600160a01b0382166000908152600a602090815260408083208484528252808320868452909152902080546001919060ff191682806200136c565b62002d5862002eee565b6001600160a01b03811662002d8457604051631e4fbdf760e01b81526000600482015260240162000b51565b62000ca08162003085565b8062002dd85760405162461bcd60e51b8152602060048201526017602482015276436f6e74656e742063616e6e6f7420626520656d70747960481b604482015260640162000b51565b336000818152600560209081526040808320548151608081018352818152808401959095528151601f87018490048402810184018352868152909492918301918790879081908401838280828437600092018290525093855250505060209182018190523381526005825260408082208054600180820183559184529284902085516004909402019283559284015192820180546001600160a01b0319166001600160a01b0390941693909317909255908201519192508291600282019062002ea29082620040d4565b50606082015181600301555050336001600160a01b03167f8287f7cb9ee4a80a03db149d7cce31b9dc4803c6746c41e6131a5da3fbe392fa8585856040516200101f93929190620041fb565b3362002f217f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6001600160a01b031614620013a85760405163118cdaa760e01b815233600482015260240162000b51565b62000ca0813362003224565b600060008051602062005e7183398151915262002f7684846200181b565b62002ff9576000848152602082815260408083206001600160a01b03871684529091529020805460ff1916600117905562002fae3390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050620009e3565b6000915050620009e3565b600060008051602062005e718339815191526200302284846200181b565b1562002ff9576000848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a46001915050620009e3565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6000806000808480602001905181019062003112919062004221565b9194509250905062001c04670de0b6b3a76400008462003c6f565b6200313762003261565b62000ca081620032ab565b620013a862003261565b60008060026200315e84600162003fe9565b6200316a919062003c6f565b90508291505b81811015620031ab579050806002816200318b818662003c6f565b62003197919062003fe9565b620031a3919062003c6f565b905062003170565b50919050565b60008060405180602001620031c69062003323565b6020820181038252601f19601f820116604052509050600086868686604051602001620031f7949392919062004276565b604051602081830303815290604052805190602001209050808251602084016000f5979650505050505050565b6200323082826200181b565b6200138e5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440162000b51565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0054600160401b900460ff16620013a857604051631afcd79f60e31b815260040160405180910390fd5b62002d5862003261565b6040518061012001604052806000815260200160006001600160a01b03168152602001606081526020016060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6118c7806200429183390190565b6103198062005b5883390190565b6000602082840312156200334457600080fd5b81356001600160e01b0319811681146200335d57600080fd5b9392505050565b6001600160a01b038116811462000ca057600080fd5b6000806000606084860312156200339057600080fd5b833592506020840135620033a48162003364565b929592945050506040919091013590565b634e487b7160e01b600052602160045260246000fd5b6020810160038310620033ee57634e487b7160e01b600052602160045260246000fd5b91905290565b6000602082840312156200340757600080fd5b81356200335d8162003364565b60005b838110156200343157818101518382015260200162003417565b50506000910152565b600081518084526200345481602086016020860162003414565b601f01601f19169290920160200192915050565b8051825260018060a01b03602082015116602083015260006040820151608060408501526200349b60808501826200343a565b606093840151949093019390935250919050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156200350857603f19888603018452620034f585835162003468565b94509285019290850190600101620034d6565b5092979650505050505050565b6000602082840312156200352857600080fd5b5035919050565b600080604083850312156200354357600080fd5b50508035926020909101359150565b600080604083850312156200356657600080fd5b8235620035738162003364565b946020939093013593505050565b6020815260006200335d602083018462003468565b60008060408385031215620035aa57600080fd5b823591506020830135620035be8162003364565b809150509250929050565b60008083601f840112620035dc57600080fd5b5081356001600160401b03811115620035f457600080fd5b6020830191508360208285010111156200360d57600080fd5b9250929050565b6000806000604084860312156200362a57600080fd5b8335925060208401356001600160401b038111156200364857600080fd5b6200365686828701620035c9565b9497909650939450505050565b6020815281516020820152600060208301516200368b60408401826001600160a01b03169052565b506040830151610120806060850152620036aa6101408501836200343a565b91506060850151601f19858403016080860152620036c983826200343a565b9250506080850151620036e760a08601826001600160a01b03169052565b5060a085015160c085015260c085015160e085015260e08501516101008181870152808701519150506200371e8286018215159052565b5090949350505050565b6000806000606084860312156200373e57600080fd5b83356200374b8162003364565b92506020840135620033a48162003364565b6000806000606084860312156200377357600080fd5b8335620037808162003364565b95602085013595506040909401359392505050565b6020808252825182820181905260009190848201906040850190845b81811015620037d85783516001600160a01b031683529284019291840191600101620037b1565b50909695505050505050565b60008060008060008060808789031215620037fe57600080fd5b86356001600160401b03808211156200381657600080fd5b620038248a838b01620035c9565b909850965060208901359150808211156200383e57600080fd5b506200384d89828a01620035c9565b979a9699509760408101359660609091013595509350505050565b600080602083850312156200387c57600080fd5b82356001600160401b038111156200389357600080fd5b620038a185828601620035c9565b90969095509350505050565b600181811c90821680620038c257607f821691505b602082108103620031ab57634e487b7160e01b600052602260045260246000fd5b60208082526016908201527521b0b63632b91034b9903737ba1030b71030b236b4b760511b604082015260600190565b602080825260149082015273149bdd5b9908191bd95cc81b9bdd08195e1a5cdd60621b604082015260600190565b60208082526018908201527f526f756e644964203020646f6573206e6f742065786973740000000000000000604082015260600190565b634e487b7160e01b600052601160045260246000fd5b81810381811115620009e357620009e362003978565b634e487b7160e01b600052603260045260246000fd5b602080825260169082015275105c9d1a58db1948191bd95cc81b9bdd08195e1a5cdd60521b604082015260600190565b634e487b7160e01b600052604160045260246000fd5b601f8211156200129e57600081815260208120601f850160051c8101602086101562003a295750805b601f850160051c820191505b8181101562001fe85782815560010162003a35565b600019600383901b1c191660019190911b1790565b81810362003a6b575050565b62003a778254620038ad565b6001600160401b0381111562003a915762003a91620039ea565b62003aa98162003aa28454620038ad565b8462003a00565b6000601f82116001811462003adc576000831562003ac75750848201545b62003ad3848262003a4a565b85555062001591565b600085815260209020601f19841690600086815260209020845b8381101562003b18578286015482556001958601959091019060200162003af6565b508583101562003b375781850154600019600388901b60f8161c191681555b5050505050600190811b01905550565b600181815b8085111562003b8857816000190482111562003b6c5762003b6c62003978565b8085161562003b7a57918102915b93841c939080029062003b4c565b509250929050565b60008262003ba157506001620009e3565b8162003bb057506000620009e3565b816001811462003bc9576002811462003bd45762003bf4565b6001915050620009e3565b60ff84111562003be85762003be862003978565b50506001821b620009e3565b5060208310610133831016604e8410600b841016171562003c19575081810a620009e3565b62003c25838362003b47565b806000190482111562003c3c5762003c3c62003978565b029392505050565b60006200335d60ff84168362003b90565b8082028115828204841417620009e357620009e362003978565b60008262003c8d57634e487b7160e01b600052601260045260246000fd5b500490565b60208082526021908201527f4170706c69636174696f6e20737461747573206973206e6f742050656e64696e6040820152606760f81b606082015260800190565b602080825260149082015273139bc8185c9d1a58db195cc81a5b881c9bdd5b9960621b604082015260600190565b6001600160401b0383111562003d1b5762003d1b620039ea565b62003d338362003d2c8354620038ad565b8362003a00565b6000601f84116001811462003d66576000851562003d515750838201355b62003d5d868262003a4a565b84555062001591565b600083815260209020601f19861690835b8281101562003d99578685013582556020948501946001909201910162003d77565b508682101562003db75760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b8051801515811462003dda57600080fd5b919050565b60006020828403121562003df257600080fd5b6200335d8262003dc9565b60405161014081016001600160401b038111828210171562003e235762003e23620039ea565b60405290565b80516001600160401b038116811462003dda57600080fd5b805162003dda8162003364565b600082601f83011262003e6057600080fd5b81516001600160401b038082111562003e7d5762003e7d620039ea565b604051601f8301601f19908116603f0116810190828211818310171562003ea85762003ea8620039ea565b8160405283815286602085880101111562003ec257600080fd5b62003ed584602083016020890162003414565b9695505050505050565b60006020828403121562003ef257600080fd5b81516001600160401b038082111562003f0a57600080fd5b90830190610140828603121562003f2057600080fd5b62003f2a62003dfd565b825181526020830151602082015262003f466040840162003e29565b604082015262003f596060840162003e29565b606082015262003f6c6080840162003e29565b608082015260a083015160a082015262003f8960c0840162003e41565b60c082015262003f9c60e0840162003e41565b60e082015261010062003fb181850162003dc9565b90820152610120838101518381111562003fca57600080fd5b62003fd88882870162003e4e565b918301919091525095945050505050565b80820180821115620009e357620009e362003978565b60006001820162004014576200401462003978565b5060010190565b6001600160a01b03858116825284166020808301919091526040820184905260806060830152825460009182916200405381620038ad565b80608087015260a06001808416600081146200407857600181146200409357620040c3565b60ff1985168984015283151560051b890183019650620040c3565b896000528560002060005b85811015620040bb5781548b82018601529083019087016200409e565b8a0184019750505b50949b9a5050505050505050505050565b81516001600160401b03811115620040f057620040f0620039ea565b620041018162003aa28454620038ad565b602080601f831160018114620041355760008415620041205750858301515b6200412c858262003a4a565b86555062001fe8565b600085815260208120601f198616915b82811015620041665788860151825594840194600190910190840162004145565b508582101562003b3757939096015160001960f8600387901b161c19169092555050600190811b01905550565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b038716815285602082015260a060408201526000620041e660a08301868862004193565b60608301949094525060800152949350505050565b6040815260006200421160408301858762004193565b9050826020830152949350505050565b6000806000606084860312156200423757600080fd5b83519250602084015163ffffffff811681146200425357600080fd5b604085015190925060ff811681146200426b57600080fd5b809150509250925092565b83858237909201908152602081019190915260400191905056fe60806040523480156200001157600080fd5b50604051620018c7380380620018c7833981016040819052620000349162000128565b806040518060400160405280600781526020016626bcaa37b5b2b760c91b815250604051806040016040528060038152602001624d544b60e81b8152508160009081620000829190620001ff565b506001620000918282620001ff565b5050506001600160a01b038116620000c357604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000ce81620000d6565b5050620002cb565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000602082840312156200013b57600080fd5b81516001600160a01b03811681146200015357600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200018557607f821691505b602082108103620001a657634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001fa57600081815260208120601f850160051c81016020861015620001d55750805b601f850160051c820191505b81811015620001f657828155600101620001e1565b5050505b505050565b81516001600160401b038111156200021b576200021b6200015a565b62000233816200022c845462000170565b84620001ac565b602080601f8311600181146200026b5760008415620002525750858301515b600019600386901b1c1916600185901b178555620001f6565b600085815260208120601f198616915b828110156200029c578886015182559484019460019091019084016200027b565b5085821015620002bb5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6115ec80620002db6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638da5cb5b116100a2578063ab33a3ad11610071578063ab33a3ad14610239578063b88d4fde1461024c578063c87b56dd1461025f578063e985e9c514610272578063f2fde38b1461028557600080fd5b80638da5cb5b146101fa57806391cb292e1461020b57806395d89b411461021e578063a22cb4651461022657600080fd5b806323b872dd116100e957806323b872dd1461019857806342842e0e146101ab5780636352211e146101be57806370a08231146101d1578063715018a6146101f257600080fd5b806301ffc9a71461011b57806306fdde0314610143578063081812fc14610158578063095ea7b314610183575b600080fd5b61012e61012936600461108c565b610298565b60405190151581526020015b60405180910390f35b61014b6102ea565b60405161013a91906110f9565b61016b61016636600461110c565b61037c565b6040516001600160a01b03909116815260200161013a565b610196610191366004611141565b6103a5565b005b6101966101a636600461116b565b6103b4565b6101966101b936600461116b565b610444565b61016b6101cc36600461110c565b610464565b6101e46101df3660046111a7565b61046f565b60405190815260200161013a565b6101966104b7565b6006546001600160a01b031661016b565b61012e61021936600461116b565b6104cb565b61014b610630565b6101966102343660046111c2565b61063f565b6101966102473660046111fe565b61064a565b61019661025a3660046112af565b610828565b61014b61026d36600461110c565b61083f565b61012e61028036600461138b565b6108b3565b6101966102933660046111a7565b6108e1565b60006001600160e01b031982166380ac58cd60e01b14806102c957506001600160e01b03198216635b5e139f60e01b145b806102e457506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102f9906113be565b80601f0160208091040260200160405190810160405280929190818152602001828054610325906113be565b80156103725780601f1061034757610100808354040283529160200191610372565b820191906000526020600020905b81548152906001019060200180831161035557829003601f168201915b5050505050905090565b60006103878261091f565b506000828152600460205260409020546001600160a01b03166102e4565b6103b0828233610958565b5050565b6001600160a01b0382166103e357604051633250574960e11b8152600060048201526024015b60405180910390fd5b60006103f0838333610965565b9050836001600160a01b0316816001600160a01b03161461043e576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016103da565b50505050565b61045f83838360405180602001604052806000815250610828565b505050565b60006102e48261091f565b60006001600160a01b03821661049b576040516322718ad960e21b8152600060048201526024016103da565b506001600160a01b031660009081526003602052604090205490565b6104bf610a5e565b6104c96000610a8b565b565b6000805b600754811015610623576000818152600860209081526040808320815160808101835281546001600160a01b0390811682526001830154169381019390935260028101549183019190915260038101805460608401919061052f906113be565b80601f016020809104026020016040519081016040528092919081815260200182805461055b906113be565b80156105a85780601f1061057d576101008083540402835291602001916105a8565b820191906000526020600020905b81548152906001019060200180831161058b57829003601f168201915b5050505050815250509050846001600160a01b031681602001516001600160a01b03161480156105db5750838160400151145b80156106005750856001600160a01b03166105f583610464565b6001600160a01b0316145b1561061057600192505050610629565b508061061b816113f8565b9150506104cf565b50600090505b9392505050565b6060600180546102f9906113be565b6103b0338383610add565b610652610a5e565b6001600160a01b0385166106a15760405162461bcd60e51b81526020600482015260166024820152754d696e7465722061646472657373206973207a65726f60501b60448201526064016103da565b6001600160a01b0384166106f05760405162461bcd60e51b8152602060048201526016602482015275417574686f722061646472657373206973207a65726f60501b60448201526064016103da565b806107345760405162461bcd60e51b8152602060048201526014602482015273436f6e74656e742055524920697320656d70747960601b60448201526064016103da565b6007805460009182610745836113f8565b9190505590506107558682610b7c565b6040518060800160405280876001600160a01b03168152602001866001600160a01b0316815260200185815260200184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093909452505083815260086020908152604091829020845181546001600160a01b03199081166001600160a01b03928316178355928601516001830180549094169116179091559083015160028201556060830151909150600382019061081d908261146d565b505050505050505050565b6108338484846103b4565b61043e84848484610b96565b606061084a8261091f565b50600061086260408051602081019091526000815290565b905060008151116108825760405180602001604052806000815250610629565b8061088c84610cbf565b60405160200161089d92919061152d565b6040516020818303038152906040529392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6108e9610a5e565b6001600160a01b03811661091357604051631e4fbdf760e01b8152600060048201526024016103da565b61091c81610a8b565b50565b6000818152600260205260408120546001600160a01b0316806102e457604051637e27328960e01b8152600481018490526024016103da565b61045f8383836001610d52565b6000828152600260205260408120546001600160a01b039081169083161561099257610992818486610e58565b6001600160a01b038116156109d0576109af600085600080610d52565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b038516156109ff576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b6006546001600160a01b031633146104c95760405163118cdaa760e01b81523360048201526024016103da565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610b0f57604051630b61174360e31b81526001600160a01b03831660048201526024016103da565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6103b0828260405180602001604052806000815250610ebc565b6001600160a01b0383163b1561043e57604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610bd890339088908790879060040161155c565b6020604051808303816000875af1925050508015610c13575060408051601f3d908101601f19168201909252610c1091810190611599565b60015b610c7c573d808015610c41576040519150601f19603f3d011682016040523d82523d6000602084013e610c46565b606091505b508051600003610c7457604051633250574960e11b81526001600160a01b03851660048201526024016103da565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14610cb857604051633250574960e11b81526001600160a01b03851660048201526024016103da565b5050505050565b60606000610ccc83610ed3565b600101905060008167ffffffffffffffff811115610cec57610cec611299565b6040519080825280601f01601f191660200182016040528015610d16576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610d2057509392505050565b8080610d6657506001600160a01b03821615155b15610e28576000610d768461091f565b90506001600160a01b03831615801590610da25750826001600160a01b0316816001600160a01b031614155b8015610db55750610db381846108b3565b155b15610dde5760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016103da565b8115610e265783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610e63838383610fab565b61045f576001600160a01b038316610e9157604051637e27328960e01b8152600481018290526024016103da565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016103da565b610ec68383611011565b61045f6000848484610b96565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610f125772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610f3e576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610f5c57662386f26fc10000830492506010015b6305f5e1008310610f74576305f5e100830492506008015b6127108310610f8857612710830492506004015b60648310610f9a576064830492506002015b600a83106102e45760010192915050565b60006001600160a01b038316158015906110095750826001600160a01b0316846001600160a01b03161480610fe55750610fe584846108b3565b8061100957506000828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160a01b03821661103b57604051633250574960e11b8152600060048201526024016103da565b600061104983836000610965565b90506001600160a01b0381161561045f576040516339e3563760e11b8152600060048201526024016103da565b6001600160e01b03198116811461091c57600080fd5b60006020828403121561109e57600080fd5b813561062981611076565b60005b838110156110c45781810151838201526020016110ac565b50506000910152565b600081518084526110e58160208601602086016110a9565b601f01601f19169290920160200192915050565b60208152600061062960208301846110cd565b60006020828403121561111e57600080fd5b5035919050565b80356001600160a01b038116811461113c57600080fd5b919050565b6000806040838503121561115457600080fd5b61115d83611125565b946020939093013593505050565b60008060006060848603121561118057600080fd5b61118984611125565b925061119760208501611125565b9150604084013590509250925092565b6000602082840312156111b957600080fd5b61062982611125565b600080604083850312156111d557600080fd5b6111de83611125565b9150602083013580151581146111f357600080fd5b809150509250929050565b60008060008060006080868803121561121657600080fd5b61121f86611125565b945061122d60208701611125565b935060408601359250606086013567ffffffffffffffff8082111561125157600080fd5b818801915088601f83011261126557600080fd5b81358181111561127457600080fd5b89602082850101111561128657600080fd5b9699959850939650602001949392505050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156112c557600080fd5b6112ce85611125565b93506112dc60208601611125565b925060408501359150606085013567ffffffffffffffff8082111561130057600080fd5b818701915087601f83011261131457600080fd5b81358181111561132657611326611299565b604051601f8201601f19908116603f0116810190838211818310171561134e5761134e611299565b816040528281528a602084870101111561136757600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561139e57600080fd5b6113a783611125565b91506113b560208401611125565b90509250929050565b600181811c908216806113d257607f821691505b6020821081036113f257634e487b7160e01b600052602260045260246000fd5b50919050565b60006001820161141857634e487b7160e01b600052601160045260246000fd5b5060010190565b601f82111561045f57600081815260208120601f850160051c810160208610156114465750805b601f850160051c820191505b8181101561146557828155600101611452565b505050505050565b815167ffffffffffffffff81111561148757611487611299565b61149b8161149584546113be565b8461141f565b602080601f8311600181146114d057600084156114b85750858301515b600019600386901b1c1916600185901b178555611465565b600085815260208120601f198616915b828110156114ff578886015182559484019460019091019084016114e0565b508582101561151d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000835161153f8184602088016110a9565b8351908301906115538183602088016110a9565b01949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061158f908301846110cd565b9695505050505050565b6000602082840312156115ab57600080fd5b81516106298161107656fea2646970667358221220150e3cf140635b4a78c366688c66d96a411c5bccd274e75522cb9a698aec3cde64736f6c63430008140033608060405234801561001057600080fd5b50600080546001600160a01b031916331790556102e7806100326000396000f3fe6080604052600436106100385760003560e01c806312065fe0146100445780638da5cb5b14610064578063c32d316c1461009c57600080fd5b3661003f57005b600080fd5b34801561005057600080fd5b506040514781526020015b60405180910390f35b34801561007057600080fd5b50600054610084906001600160a01b031681565b6040516001600160a01b03909116815260200161005b565b3480156100a857600080fd5b506100bc6100b7366004610279565b6100cc565b604051901515815260200161005b565b600080546001600160a01b031633146101375760405162461bcd60e51b815260206004820152602260248201527f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f604482015261371760f11b60648201526084015b60405180910390fd5b814710156101875760405162461bcd60e51b815260206004820152601760248201527f4e6f7420656e6f75676820706f6f6c2062616c616e6365000000000000000000604482015260640161012e565b6001600160a01b0383166101cf5760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b604482015260640161012e565b6000836001600160a01b03168360405160006040518083038185875af1925050503d806000811461021c576040519150601f19603f3d011682016040523d82523d6000602084013e610221565b606091505b50509050806102725760405162461bcd60e51b815260206004820152601760248201527f4661696c656420746f20706f6f6c207472616e73666572000000000000000000604482015260640161012e565b9392505050565b6000806040838503121561028c57600080fd5b82356001600160a01b03811681146102a357600080fd5b94602093909301359350505056fea26469706673582212200d793183ea33d9694ae902b33b3dafa3ae4e51e4d03075aac0b376b78cf21f6464736f6c6343000814003302dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800a264697066735822122019faa9fc40fa3671422844cecda6657914eac21f6f77b14cf737ca105a5613e464736f6c63430008140033",
  linkReferences: {},
  deployedLinkReferences: {},
};
