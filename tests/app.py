import streamlit as st
import numpy as np
import time
import matplotlib.pyplot as plt

st.set_page_config(page_title="BreathState Prototype", layout="wide")

st.title("🌬️ BreathState Prototype - HRV Tracker")

# Simulated HRV Data
st.subheader("📊 Real-time HRV Data")
fig, ax = plt.subplots()

x_data = np.linspace(0, 100, 100)
y_data = 70 + 20 * np.sin(x_data * 2 * np.pi / 100)  # Simulated HRV

ax.plot(x_data, y_data, label="HRV Data", color="skyblue")
ax.set_xlabel("Time")
ax.set_ylabel("HRV")
ax.legend()

st.pyplot(fig)

st.info("⚠️ This is just a prototype! Real sensor data will be integrated soon.")
