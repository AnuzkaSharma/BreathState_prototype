import asyncio
import random

# Mock BleakClient to simulate behavior
class MockBleakClient:
    def __init__(self, address):
        self.address = address
        self.connected = False

    async def __aenter__(self):
        print(f"Simulating connection to {self.address}")
        self.connected = True
        return self

    async def __aexit__(self, exc_type, exc, tb):
        print(f"Simulated disconnect from {self.address}")
        self.connected = False

    async def read_gatt_char(self, uuid):
        """Simulate reading a heart rate measurement UUID."""
        simulated_heart_rate = random.randint(60, 120)  # Fake HR data
        print(f"Simulated heart rate reading: {simulated_heart_rate} BPM")
        return bytes([simulated_heart_rate])  # Return as bytes like a real device

# Use the mock class instead of BleakClient
async def connect_and_read():
    DEVICE_ADDRESS = "00:11:22:33:44:55"
    HEART_RATE_UUID = "00002a37-0000-1000-8000-00805f9b34fb"

    async with MockBleakClient(DEVICE_ADDRESS) as client:
        while client.connected:
            data = await client.read_gatt_char(HEART_RATE_UUID)
            await asyncio.sleep(1)  # Simulate periodic data fetching

# Run the simulation
if __name__ == "__main__":
    asyncio.run(connect_and_read())
