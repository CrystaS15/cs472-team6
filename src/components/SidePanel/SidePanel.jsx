import { SidePanelState, SidePanelVisibility, devViewState } from "../../state"
import { Tabs } from "../../utils/utils"
import ComponentOptionsTab from "../ComponentOptionsTab/ComponentOptionsTab"
import ComponentsListTab from "../ComponentsListTab/ComponentsListTab"
import Icon from "../Icon/Icon"
import PageOptionsTab from "../PageOptionsTab/PageOptionsTab"

const tabs = [
    {
        name: Tabs.ComponentOptionsTab,
        icon: "list-bullet",
        panel: ComponentOptionsTab
    },
    {
        name: Tabs.ComponentsListTab,
        icon: "cube",
        panel: ComponentsListTab
    },
    {
        name: Tabs.PageOptionsTab,
        icon: "adjustments-horizontal",
        panel: PageOptionsTab
    }
]

function TabButton({icon, selected, selectTab}) {
    let setVisibility = SidePanelVisibility((state) => state.setVisibility);
    let isDevView = devViewState((state) => state.isDevView);

    return (
        <button 
            className={`py-2 px-3 ${isDevView ? "invisible" : selected ? 'bg-gray-400' : 'hover:bg-gray-300'}`}
            onClick={() => {
                selectTab();
                setVisibility(true);
            }} 
        >
            <Icon name={icon}/>
        </button>
    )
}

export default function SidePanel() {
    let activeTab = SidePanelState((state) => state.activeTab);
    let setTab = SidePanelState((state) => state.setTab);
    let ActivePanel = tabs.filter((tab) => tab.name === activeTab)[0].panel;
    let isVisible = SidePanelVisibility((state) => state.isVisible);
    let setVisibility = SidePanelVisibility((state) => state.setVisibility);
    let isDevView = devViewState((state) => state.isDevView);

    return (
        <div className={`${isDevView ? "w-0" : isVisible ? "w-80" : "w-12" } duration-500 bg-gray-100 flex flex-col relative`}>
            {/* Tab Button Container */}
            <div>
                {tabs.map((tab) => <TabButton key={tab.name} icon={tab.icon} selected={activeTab === tab.name} selectTab={() => setTab(tab.name)}/>)}
            </div>
            <div className={`overflow-scroll ${ isVisible ? "visble" : "invisible"} grow `}>
                <ActivePanel />
            </div>
            <button onClick={() => setVisibility(false)} className={`${ isDevView ? "invisible" : isVisible ? "visble" : "invisible" } p-4 flex align-self-end items-center justify-center bg-black text-white shadow-lg rounded-lg m-4`}>
                Hide Sidebar
            </button>
        </div>
    )
}