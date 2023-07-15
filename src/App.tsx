import NavBar from "./ui-components/NavBar"
import NoteUICollection from "./ui-components/NoteUICollection"
import './App.css'
import CreateNote from "./ui-components/CreateNote"
import UpdateNote from "./ui-components/UpdateNote"
import { useState } from "react"
import { withAuthenticator } from "@aws-amplify/ui-react"
import { DataStore } from "aws-amplify"

function App({ signOut }: { signOut: () => void }) {

  const [showCreateNoteModal, setShowCreateNoteModal] = useState(false)
  const [showUpdateNoteModal, setShowUpdateNoteModal] = useState(false)
  const [updateNote, setUpdateNote] = useState()

  return (
    <>
      <NavBar
        width="100%"
        marginBottom="20px"
        overrides={{
          Button31632483: { onClick: () => setShowCreateNoteModal(true) },
          Button31632487: {
            onClick: async () => {
              signOut()
              await DataStore.clear()
            }
          }
        }}
      />
      <div className="container">
        <NoteUICollection overrideItems={({ item }) => {
          return {
            overrides: {
              Vector31472745: {
                // as: 'button',
                onClick: () => {
                  setShowUpdateNoteModal(true)
                  setUpdateNote(item)
                }
              }
            }
          }
        }}
        />
      </div>
      {/* @ts-ignore */}
      <div className="modal" style={{ display: !showCreateNoteModal && "none" }}>
        <CreateNote
          overrides={{
            MyIcon: {
              onClick: () => setShowCreateNoteModal(false),
              as: "button"
            },
          }}
        />
      </div>
      {/* @ts-ignore */}
      <div className="modal" style={{ display: !showUpdateNoteModal && "none" }}>
        <UpdateNote
          overrides={{
            MyIcon: {
              onClick: () => setShowUpdateNoteModal(false),
              as: "button"
            },
          }}
          // @ts-ignore
          note={updateNote}
        />
      </div>
    </>
  )
}

export default withAuthenticator(App)
