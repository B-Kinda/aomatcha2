"use client";

import { useState } from "react";

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardName: string;
  };
}

export default function ProfilPage() {
  const [profile, setProfile] = useState<UserProfile>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bio: "",
    address: {
      street: "",
      city: "",
      postalCode: "",
      country: "France",
    },
    paymentMethod: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardName: "",
    },
  });

  const [activeTab, setActiveTab] = useState("personal");

  const handleInputChange = (section: string, field: string, value: string) => {
    if (section === "address") {
      setProfile((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else if (section === "paymentMethod") {
      setProfile((prev) => ({
        ...prev,
        paymentMethod: {
          ...prev.paymentMethod,
          [field]: value,
        },
      }));
    } else {
      setProfile((prev) => ({
        ...prev,
        [section]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Profile updated:", profile);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mon Profil</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("personal")}
                  className={`w-full text-left px-4 py-2 rounded-md transition ${
                    activeTab === "personal"
                      ? "bg-green-100 text-green-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Informations personnelles
                </button>
                <button
                  onClick={() => setActiveTab("address")}
                  className={`w-full text-left px-4 py-2 rounded-md transition ${
                    activeTab === "address"
                      ? "bg-green-100 text-green-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Adresse de livraison
                </button>
                <button
                  onClick={() => setActiveTab("payment")}
                  className={`w-full text-left px-4 py-2 rounded-md transition ${
                    activeTab === "payment"
                      ? "bg-green-100 text-green-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Moyen de paiement
                </button>
                <a
                  href="/commandes"
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 transition"
                >
                  Mes commandes
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <form onSubmit={handleSubmit}>
                {/* Personal Information Tab */}
                {activeTab === "personal" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6">
                      Informations personnelles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Prénom *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          value={profile.firstName}
                          onChange={(e) =>
                            handleInputChange(
                              "firstName",
                              "firstName",
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          value={profile.lastName}
                          onChange={(e) =>
                            handleInputChange(
                              "lastName",
                              "lastName",
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={profile.email}
                          onChange={(e) =>
                            handleInputChange("email", "email", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={profile.phone}
                          onChange={(e) =>
                            handleInputChange("phone", "phone", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label
                        htmlFor="bio"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Présentation personnelle
                      </label>
                      <textarea
                        id="bio"
                        rows={4}
                        value={profile.bio}
                        onChange={(e) =>
                          handleInputChange("bio", "bio", e.target.value)
                        }
                        placeholder="Parlez-nous un peu de vous et de votre passion pour le thé..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                )}

                {/* Address Tab */}
                {activeTab === "address" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6">
                      Adresse de livraison
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="street"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Adresse *
                        </label>
                        <input
                          type="text"
                          id="street"
                          value={profile.address.street}
                          onChange={(e) =>
                            handleInputChange(
                              "address",
                              "street",
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Ville *
                          </label>
                          <input
                            type="text"
                            id="city"
                            value={profile.address.city}
                            onChange={(e) =>
                              handleInputChange(
                                "address",
                                "city",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="postalCode"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Code postal *
                          </label>
                          <input
                            type="text"
                            id="postalCode"
                            value={profile.address.postalCode}
                            onChange={(e) =>
                              handleInputChange(
                                "address",
                                "postalCode",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Pays *
                        </label>
                        <select
                          id="country"
                          value={profile.address.country}
                          onChange={(e) =>
                            handleInputChange(
                              "address",
                              "country",
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="France">France</option>
                          <option value="Belgique">Belgique</option>
                          <option value="Suisse">Suisse</option>
                          <option value="Luxembourg">Luxembourg</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Tab */}
                {activeTab === "payment" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6">
                      Moyen de paiement
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="cardName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Nom sur la carte *
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          value={profile.paymentMethod.cardName}
                          onChange={(e) =>
                            handleInputChange(
                              "paymentMethod",
                              "cardName",
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="cardNumber"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Numéro de carte *
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          value={profile.paymentMethod.cardNumber}
                          onChange={(e) =>
                            handleInputChange(
                              "paymentMethod",
                              "cardNumber",
                              e.target.value
                            )
                          }
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="expiryDate"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Date d&apos;expiration *
                          </label>
                          <input
                            type="text"
                            id="expiryDate"
                            value={profile.paymentMethod.expiryDate}
                            onChange={(e) =>
                              handleInputChange(
                                "paymentMethod",
                                "expiryDate",
                                e.target.value
                              )
                            }
                            placeholder="MM/AA"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="cvv"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            CVV *
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            value={profile.paymentMethod.cvv}
                            onChange={(e) =>
                              handleInputChange(
                                "paymentMethod",
                                "cvv",
                                e.target.value
                              )
                            }
                            placeholder="123"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
                  >
                    Annuler
                  </button>
                  <button type="submit" className="btn-primary">
                    Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
