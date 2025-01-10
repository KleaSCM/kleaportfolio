import ProjectPage from "@/components/ProjectPage";

const Project1 = () => {
  return (
    <>
      <ProjectPage
        title="EncryptDcrypt"
        description="A utility tool for secure file management, enabling encryption and decryption of files, generating password-protected Excel and Word documents, and automating repetitive content creation tasks. Built using Python with an emphasis on security and automation."
        details={[
          {
            name: "Python",
            reason: "Core language used for encryption, decryption, and file operations.",
            badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
          },
          {
            name: "Cryptography",
            reason: "Used for file encryption and decryption to ensure data security.",
            badge: "https://img.shields.io/badge/Cryptography-6E5494?style=for-the-badge",
          },
          {
            name: "OpenPyXL",
            reason: "Automates creation and protection of Excel documents with random data.",
            badge: "https://img.shields.io/badge/OpenPyXL-FFDD44?style=for-the-badge",
          },
          {
            name: "Win32Com",
            reason: "Automates creation and protection of Word documents.",
            badge: "https://img.shields.io/badge/Win32Com-007ACC?style=for-the-badge",
          },
        ]}
        screenshot="/images/encryption-utility.png"
        codeSnippet={`# Encrypt a file with Fernet
from cryptography.fernet import Fernet

# Load encryption key
def load_key():
    with open("key.txt", "rb") as key_file:
        return key_file.read()

# Encrypt a file
def encrypt_file(file_path, key):
    with open(file_path, "rb") as file:
        data = file.read()
    cipher = Fernet(key)
    encrypted_data = cipher.encrypt(data)
    with open(file_path, "wb") as file:
        file.write(encrypted_data)

# Main function
if __name__ == "__main__":
    key = load_key()
    encrypt_file("example.txt", key)
    print("File encrypted successfully.")
`}
        buttons={[
          {
            label: "GitHub",
            link: "https://github.com/kleascm/encryption-utility",
            icon: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
          },
        ]}
      />
    </>
  );
};

export default Project1;
