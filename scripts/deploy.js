async function main() {
    const MockUSDC = await ethers.getContractFactory("HanycUSDC");
    const mockUSDC = await MockUSDC.deploy();
    console.log("MockUSDC deployed to:", await mockUSDC.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
